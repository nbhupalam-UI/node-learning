const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    const taskData = await task.save();
    res.status(201).send(taskData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.get("/tasks", auth, async (req, res) => {
//   try {
//     // const tasks = await Task.find({ owner: req.user._id });
//     await req.user.populate("tasks").execPopulate();
//     res.send(req.user.tasks);
//   } catch (e) {
//     res.status(500).send(err);
//   }
// });

// filtering - GET /tasks?completed=true
// pagination - GET /tasks?limit=2&skip=0
// sorting - by created or updated time or completed value - GET /tasks?sortBy=createdAt_asc(or desc)
router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  if (req.query.sortBy) {
    const [sortKey, direction] = req.query.sortBy.split("_");
    sort[sortKey] = direction === "asc" ? 1 : -1;
  }
  try {
    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          limit: parseInt(req.query.limit, 10),
          skip: parseInt(req.query.skip || 0, 10),
          sort,
        },
      })
      .execPopulate();
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("Task not found!!!");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["completed", "description"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      return res.status(400).send({ error: "invalid Updates!!!" });
    }
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      return res.status(404).send("Task not found!!!");
    }
    updates.forEach((f) => {
      task[f] = req.body[f];
    });
    await task.save();
    res.send(task);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    // const task = await Task.findOnea(req.params.id);
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const bcrypt = require("bcryptjs");
// const myFunc = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(hashedPassword);
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };

// myFunc();

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = await jwt.sign({ _id: "abc123" }, process.env.JWT_SECRET, {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = await jwt.verify(token, process.env.JWT_SECRET);
//   console.log(data);
// };

// myFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const task = await Task.findById("60169d3490129f134d824eee");
//   await task.populate("owner").execPopulate();
//   console.log(task.owner);
//   const user = await User.findById("60169d1f90129f134d824eec");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();

// const multer = require("multer");
// const upload = multer({ dest: "images" });

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

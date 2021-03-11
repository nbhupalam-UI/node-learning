// CRUD - Create Read Update and Delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Naga Pradeep",
    //     age: 29,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Suma",
    //       age: 28,
    //     },
    //     {
    //       name: "Shaanvika",
    //       age: 4,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) return console.log("Unable to insert docs");
    //     console.log(result);
    //   }
    // );

    // const insertTasksPromise = db.collection("tasks").insertMany([
    //   {
    //     description: "task1",
    //     completed: true,
    //   },
    //   {
    //     description: "task2",
    //     completed: true,
    //   },
    //   {
    //     description: "task3",
    //     completed: false,
    //   },
    // ]);
    // insertTasksPromise
    //   .then((result) => {
    //     console.log(result.ops);
    //   })
    //   .catch((err) => {
    //     console.log("Unable to insert tasks");
    //   });
    // db.collection("users").findOne({ name: "Suma" }, (err, user) => {
    //   if (err) console.log("unable to fetch user!!");
    //   console.log(user);
    // });
    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("6013a610d47aef67579a26ec"),
    //   },
    //   (err, task) => {
    //     console.log(task);
    //   }
    // );
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((err, tasks) => {
    //     console.log(tasks);
    //   });
    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("6013a533065c2e6708b3a609"),
    //   },
    //   {
    //     $inc: {
    //       age: -1,
    //     },
    //   }
    // );

    // updatePromise
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res.modifiedCount))
    //   .catch((err) => console.log(err));

    // db.collection("tasks")
    //   .updateMany(
    //     { _id: new ObjectID("6013a610d47aef67579a26eb") },
    //     {
    //       $set: {
    //         completed: false,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res.modifiedCount))
    //   .catch((err) => console.log(err));

    // db.collection("tasks")
    //   .deleteMany({ completed: true })
    //   .then((res) => console.log(res.modifiedCount))
    //   .catch((err) => console.log(err));

    // db.collection("tasks")
    //   .deleteOne({ description: "task2" })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }
);

const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");
const port = process.env.port || 3000;

app.use(express.static(publicDirectoryPath));

// let count = 0;

// Server (emit) -> client (receive) - countUpdated event
// client(emit) -> Server (receive) - increment event
io.on("connection", (socket) => {
  console.log("New web socket connection");

  //   socket.on("increment", () => {
  //     count = count + 1;
  //     // socket.emit("countUpdated", count); this will emit only for the client where the increment is triggered
  //     io.emit("countUpdated", count);
  //   });

  //   socket.emit("countUpdated", count);

  // emits event to that particular connection
  socket.emit("message", "Welcome!!");
  // broadcast emit will emit for everyone expect that particular connection and io.emit for everyone
  socket.broadcast.emit("message", "A New user has joined!!!");
  socket.on("sendMessage", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user has left!!!");
  });
});

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

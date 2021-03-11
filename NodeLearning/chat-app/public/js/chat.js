const socket = io();

// socket.on("countUpdated", (count) => {
//   console.log("Count has been updated", count);
// });

// document.getElementById("increment").addEventListener("click", () => {
//   socket.emit("increment");
// });

socket.on("message", (m) => {
  console.log(m);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message);
});

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
let userConnected = 0;

app.get("/", (request, response) => {
  response.send("It works");
});

const webServer = http.Server(app);

const socketServer = socketIO(webServer);

webServer.listen(8000, err => {
  if (err) {
    console.log("Impossible de démarrer le serveur");
    console.log(err);
  } else {
    console.log("server started, go to http://localhost:8000");
  }
});

socketServer.on("connection", socket => {
  userConnected++;

  socket.on("disconnect", () => {
    userConnected--;
  });

  socket.on("new_message", message => {
    socket.broadcast.emit("new_message", message);
  });
});

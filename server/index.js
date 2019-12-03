const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const fs = require("fs");
const app = express();
let sockets = [];

const router = express.Router();
app.use(bodyParser.json());

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/user", router);
require(__dirname + "/controller/userController")(router);

const webServer = http.Server(app);

const socketServer = socketIO(webServer);

mongoose
  .connect("mongodb://mongodb/db", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch(e => {
    console.log("Error while db connecting");
    console.log(e);
  });

app.listen(8000, err => {
  if (err) {
    console.log("Impossible de démarrer le serveur");
    console.log(err);
  } else {
    console.log("server started, go to http://localhost:8000");
  }
});

socketServer.on("connection", socket => {
  socket.on("new_user", user => {
    sockets.push((socket.user = user));

    const data = {
      user: user,
      count: sockets.length
    };

    socket.broadcast.emit("new_user", data);
    socket.emit("new_user", data);
  });

  socket.on("disconnect", () => {
    sockets = sockets.filter(user => user != socket);
    console.log(sockets);
    const data = {
      user: socket.user,
      count: sockets.length
    };
    socket.broadcast.emit("user_leave", data);
    socket.emit("user_leave", data);
  });

  socket.on("new_message", message => {
    socket.broadcast.emit("new_message", message);
  });
});

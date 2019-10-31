const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const fs = require('fs');
const app = express();
let sockets = [];

const router = express.Router();
app.use('/user', router);
require(__dirname + '/controller/userController')(router);

app.get("/", (request, response, next) => {
    response.status(200).json({text: "It works"});
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

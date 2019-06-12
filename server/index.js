const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It works");
});

app.listen(8000, err => {
  if (err) {
    console.log("Impossible de démarrer le serveur");
    console.log(err);
  } else {
    console.log("server started, go to http://localhost:8000");
  }
});

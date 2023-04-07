const express = require("express");
const cors = require("cors");
const { chats } = require("./data/data.js");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on PORT ${PORT}`));

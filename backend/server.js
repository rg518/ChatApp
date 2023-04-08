const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on PORT ${PORT}`.yellow.bold));

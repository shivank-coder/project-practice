const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const authRoutes = require("./routes/auth");
// const messageRoutes = require("./routes/messages");
const app = express();
// const socket = require("socket.io");

require("dotenv").config();
PORT=5030;
MONGO_URL='mongodb://localhost:27017/chat';

app.use(cors());
app.use(express.json());
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
const server = app.listen(PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
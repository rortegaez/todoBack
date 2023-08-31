const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");
const { findAvailablePort } = require('./logic/fetchPort')

require("dotenv").config();

mongoose.set("strictQuery", true);

const findPort = process.env.PORT ?? 3000

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.2tjxv97.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

findAvailablePort(findPort).then((port) => {
  app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
  })
  app.get('/getPort', (req, res) => {
    res.send({ port: port })
  })
})


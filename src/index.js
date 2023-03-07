const express = require("express");
const { json } = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./router");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", false);
app.use(cors());
app.use(json());

app.use(bodyParser.urlencoded({ extended: true }));

try {
  mongoose
    .connect(process.env.MONGOO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((res) => console.log("Connected to DB"));
} catch (error) {
  console.log(error);
}

app.use("/api/", router);

app.listen(8002, () => {
  console.log("app listen to port 8002");
});

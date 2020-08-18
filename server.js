require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
multer({ dest: "uploads/" });

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin1:admin1@cluster0.n4lyk.mongodb.net/smart?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();

app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(express.static(path.join(__dirname, "public")));
const apiRouter = require("./src/routes/api");
app.use("/api/v1", apiRouter);
app.listen(3000, () => console.log("server started"));

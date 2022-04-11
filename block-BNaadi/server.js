const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const userRouter = require("./routes/user");

mongoose.connect("mongodb://127.0.0.1:27017/", (err) => {
  console.log(err ? err : "Successfully connected to database");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", userRouter);

app.listen("4000", () => {
  console.log("Server is listening on port 4000");
});

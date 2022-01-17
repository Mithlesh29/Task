const express = require("express");
const mongoose = require("mongoose");
const students = require("./routes/routes");
const port = 5001;
const app = express();

mongoose
  .connect(
    "mongodb+srv://demo:dCMOlcENp7eNC3Bh@sample.uctx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(console.log("db connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.post("/", students.logPrint);
app.post("/userRegister", students.register);
app.get("/post", students.getspecStudent);
app.get("/delete", students.deletestudent);
app.get("/pagination", students.Pagination);
app.listen(port, () => {
  console.log("server is connected ", port);
});

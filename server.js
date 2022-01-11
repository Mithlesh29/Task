const express = require('express')
const mongoose = require('mongoose')
const {logPrint,register} = require("./routes/routes")
const port = 5000;
const app = express();

mongoose.connect("mongodb+srv://demo:dCMOlcENp7eNC3Bh@sample.uctx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then((console.log("db connected"))).catch((err)=> {console.log(err)})

app.use(express.json())
app.get("/", logPrint)
app.post("/userRegister", register)

app.listen(port, () => {console.log("server is connected")
})
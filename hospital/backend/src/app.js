
const express = require("express");
const mongoose = require("mongoose");
const bodyarser = require("body-parser");
const cors = require("cors");
const appp = express();
require("dotenv").config();



const { connect } = require( "./utils/database.connection.js");

const app = express();
const PORT = process.env.PORT || "7080";

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //udeFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb connection Success");
})



app.use(cors());
app.use(express.json({ limit: "20mb"}));

app.get("/", (req, res, next) =>{
    res.send("<h2>Hospital Management system API</h2>");
    next();
});

const patientRouter = require("./routes/patients.js");

app.use("/patient",patientRouter);


app.listen(PORT, () =>{
    console.log(`server is up and running on port ${PORT}`)
});

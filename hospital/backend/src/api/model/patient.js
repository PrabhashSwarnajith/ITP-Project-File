// import mongoose from 'mongoose';
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    birthday : {
        type : Date,
        required : true
    },
    IDnumber : {
        type : Number,
        required : true
    },
    TPnumber : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
})

const patient = mongoose.model("patient",patientSchema);

module.exports = patient;
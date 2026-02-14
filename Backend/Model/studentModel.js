const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
    fname : String,
    lname : String,
    contact : Number,
    email : String  
});

module.exports = mongoose.model("Student", studentModel);
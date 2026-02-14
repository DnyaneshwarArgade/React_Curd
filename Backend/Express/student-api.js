const express = require('express');
const connectDB = require('../db/db_connection');
const studentModel = require('../Model/studentModel');

const app = express();
connectDB();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/student', async (req, res) => {
    try {
        const stundet = await studentModel.find();
        res.json(stundet);
    } catch (error) {
        console.log("Error for get data...", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/student', async (req, res) => {
    try {
        const students = { fname, lname, contact, email } = req.body;
        const addstudent = await new studentModel({
            fname, lname, contact, email
        });
        const stundees = await addstudent.save();
        res.json({
            msg: 'Student Added Success...!!!'
        });
    } catch (error) {
        console.log("Error for adding data", error);
        res.status(500).send("Internal Server Error");
    }
});

app.put('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const { fname, lname, contact, email } = req.body;
        const updatestudent = await studentModel.findByIdAndUpdate(studentId, {
            fname, lname, contact, email
        }, { new: true })
        res.json({
            msg: 'Student is Updated...!!!'
        });
    } catch (error) {
        console.log("Data add Error", error);
        res.status(500).send("Internal Server Error");
    }
});

app.delete('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletestudent = await studentModel.findByIdAndDelete(studentId);
        res.json({
            msg: 'Student is Deleted..!!'
        });
    } catch (error) {
        console.log("Error for delete Student..", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server is Running on port no 5000...");
});
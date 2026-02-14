const mongoose = require('mongoose');

const db_connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://dnyaneshwarargade8_db_user:Mauli2215@cluster0.qjlvgsv.mongodb.net/?appName=Cluster0');
        console.log("Database Connected Sucessfully");
    } catch (error) {
        console.log("Database Connection Errror", error);
    }
};
module.exports = db_connection;
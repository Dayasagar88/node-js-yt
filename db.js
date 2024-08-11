const mongoose = require("mongoose");
require("dotenv").config();

// define  the mongoDB connnection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//Setup mongo DB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get a default connection
//Mongoose maintain a default connection object represting the mongoDB connection
const db = mongoose.connection;

//Define the event listeners for database connection
db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.log("MongoDB connection error " ,err);
});

db.on("disconnected", () => {
    console.log("MongoBD disconnected");
});


//Export the connection
module.exports = {
    db
}







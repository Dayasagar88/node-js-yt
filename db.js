const mongoose = require("mongoose");

// define  the mongoDB connnection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels"


//Setup mongo DB connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
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







const mongoose = require('mongoose');

//Define the person schema 
const personSchema = {
    name: {
        type : String,
        required : true
    }, 
    age:{
        type : Number ,
        required : true,
    },
    work : {
        type : String ,
        enum : ["chef", "waiter", "manager"], 
        required : true,
    }, 
    mobile : {
        type : String,
        required : true 
    },
    email : {
        type : String ,
        required : true , 
        unique : true,
    }, 
    address : {
        type : String
    },
    salery: {
        type : Number, 
        required : true  
    }
}

//Create person model 
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
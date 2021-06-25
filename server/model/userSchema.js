const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    to : {
        type : String,
        required : true ,
    } ,
    timestamp : {
        type : Date,
        required : true ,
    } ,
    subject : {
        type : String,
        required : true ,
    } ,
    message : {
        type : String,
        required : true ,
    } 
})

const requestSchema = new mongoose.Schema({
    to : {
        type : String,
        required : true ,
    } ,
    schedule : {
        type : String,
        required : true ,
    } ,
    timestamp : {
        type : Date,
        required : true ,
    } ,
    subject : {
        type : String,
        required : true ,
    } ,
    message : {
        type : String,
        required : true ,
    } 
})



const userSchema = new mongoose.Schema({
    googleId : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : false
     },
     currentRequest : {
         type : [requestSchema],
         required:false
     },
     history : { 
         type : [historySchema],
         required : false
     } 
});

const User=  mongoose.model('User',userSchema);

module.exports = User;
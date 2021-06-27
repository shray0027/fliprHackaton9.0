const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const historySchema = new mongoose.Schema({
    to : {
        type : String,
        required : false,
     }// ,
    // day:{
    //     type : Number,
    // }
    // day:{
    //     type : Number,
    // }
    // day:{
    //     type : Number,
    // }
    // day:{
    //     type : Number,
    // }
    ,
    subject : {
        type : String,
        required : false,
    } ,
    schedule : {
        type : String,
        required : false ,
    } ,
    message : {
        type : String,
        required : false,
    } 
})

const requestSchema = new mongoose.Schema({
    to : {
        type : String,
        required : false ,
    } ,
    schedule : {
        type : String,
        required : false ,
    } ,
    timestamp : {
        type : Date,
        required : false ,
    } ,
    subject : {
        type : String,
        required : false ,
    } ,
    message : {
        type : String,
        required : false ,
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
     cpassword:{
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
     },
     tokens :[
         {
             token: {
                 type:String,
                 required :true
             }
         }
     ]
});


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    if(this.isModified('cpassword')){
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_TOKEN);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}
const User=  mongoose.model('User',userSchema);

module.exports = User;
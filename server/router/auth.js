const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../DB/connection");

const User = require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send("hello");
});

router.post('/register' , async (req,res) =>{
   const { email , password , cpassword} = req.body;
    //res.send("yes it is registering");
    try{
        if(!email || !password || !cpassword){
            res.status(400).json({error : "please fill the data"});
        }

        const userExist = await User.findOne({email : email});
        
        if(userExist){
            return res.status(422).json({error : "user already exist"});
        }  else if (password!==cpassword){
            return res.status(422).json({error : "password  does not match"});
        } else {
            const user = new User ({email,password,cpassword});
            await user.save();
            res.status(201).json({message : "successfully saved"});
        }

    }catch(err){
        console.log(err);
    }
})

router.post('/signin',async (req,res)=>{
        try{
            let token;
            const {email , password} =req.body;
            if(!email || !password){
                res.status(400).json({error : "please fill the data"});
            }
            const userLogin = await User.findOne({email:email});

            if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);
                token = await userLogin.generateAuthToken();
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                })
                if(!isMatch){
                    res.status(400).json({error : "check username or password"});
                } else {
                    res.json({message : "user sign in successful"});
                }
            } else {
                res.status(400).json({error : "check username or password"});
            }
    
        } catch(err) {
            console.log(err);
        }
})

module.exports = router;
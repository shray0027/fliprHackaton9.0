const express = require("express");
const router = express.Router();

require("../DB/connection");

const User = require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send("hello");
});

router.post('/register' , (req,res) =>{
   const { email , password,history } = req.body;
    //res.send("yes it is registering");
    User.findOne({email : email}).then((userExist) =>{
        if(userExist){
            return res.status(422).json({error : "user already exist"});
        }
        const user = new User ({email,password,history});
        user.save().then(()=>{
            res.status(201).json({message : "successfully saved"});
        }).cath((err) => res.status(500).json({error : "failed to register"}));
    }).catch(err => { 
        console.log(err);
    })
})

module.exports = router;
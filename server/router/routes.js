const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const cookieParser =require('cookie-parser');
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cookieParser()) ;
require("../DB/connection");

const User = require("../model/userSchema");


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

router.get("/create",authenticate,(req,res)=>{
  //  console.log(req.rootUser);
    res.send(req.rootUser);
});
router.get("/history",authenticate,(req,res)=>{
    console.log(req.rootUser);
    res.send(req.rootUser);
});
router.get("/running",authenticate,(req,res)=>{
    console.log(req.rootUser);
    res.send(req.rootUser);
});
router.post("/create",authenticate ,async (req,res)=>{
    try {
        const {to , subject ,message , schedule ,day , date , month , time } = req.body;

        if(!to || !subject || !message || !schedule){
            res.status(400).json({error : "please fill the data"});
        }
       const output = ` <h1>flipr hackathon 9.0</h1>
                        <br>                
                        <p>Flipr is organising ts hackathon 9.0 be sure to partcipate , you can win various prizes and have chance to get placed or get internship</p>
                        <br>
                        <p>You can visit our website to take part in <a href="flipr.ai">flipr.ai</a></p>
                        <p>This email was sent you by Post mail bot</p>
                      `

                      let transporter = nodemailer.createTransport({
                        host: "gmail",
                        port: 587,
                        secure: false, 
                        auth: {
                          user: "shrayanand000@gmail.com", 
                          pass: "$Sharyblare2826", 
                        },
                        tls:{
                            rejectUnauthorized:false
                        }
                      });
    
                      let info = await transporter.sendMail({
                        from: '"post mailer" <foo@example.com>', // sender address
                        to: to, // list of receivers
                        subject: subject, // Subject line
                        text: message, // plain text body
                        html: output, // html body
                      });
                    
                      console.log("Message sent: %s", info.messageId);
                      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
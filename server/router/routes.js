const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const cookieParser =require('cookie-parser');
const nodemailer = require("nodemailer");
const {google}=require("googleapis");

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token : process.env.REFRESH_TOKEN});

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
    console.log(req.rootUser);
    res.send(req.rootUser);
});
router.get("/history",authenticate,(req,res)=>{
    //console.log(req.rootUser);
    res.send(req.rootUser);
});
router.get("/running",authenticate,(req,res)=>{
   // console.log(req.rootUser);
    res.send(req.rootUser);
});
router.post("/create",authenticate ,async (req,res)=>{
    try {
        const {to , subject ,message , schedule ,day , date , month , time } = req.body;

        if(!to || !subject || !message || !schedule){
            res.status(400).json({error : "please fill the data"});
        }
        const data = req.rootUser;
        const user = await  User.findOne({_id:data._id});
      
        let today = new Date();
        let dateToday = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let timeToday = today.getHours() + ":" + today.getMinutes();
        let timeStamp=timeToday+" "+dateToday;
        const runningObject = {to , subject ,message , schedule ,day , date , month , time };
        const historyObject = {to, subject, message , timeStamp : timeStamp}
  
        const accessToken = await oAuth2Client.getAccessToken();
         const output = `                 
                        <p>${message}</p>
                        <br>
                        <p>This was send by Postmail web app made by ShrayAnand for flipr hackathon 9.0</p>
                      `
        let transporter = nodemailer.createTransport({
                        service:'gmail',
                        host: "gmail",
                        port: 587,
                        secure: false, 
                        auth: {
                            type :'OAuth2',
                            clientId:process.env.CLIENT_ID,
                            clientSecret:process.env.CLIENT_SECRET,
                            refreshToken:process.env.REFRESH_TOKEN,
                            accessToken:accessToken,
                          user: "shrayanand000@gmail.com"
                        },
                        tls:{
                            rejectUnauthorized:false
                        }
                      });
    
         let info = await transporter.sendMail({
                        from: '"post mailer" <foo@example.com>',
                        to: to, 
                        subject: subject, 
                        text: message, 
                        html: output,
                      });
        
                      if(user){
                        user.updateRunning(runningObject);
                        user.updateHistory(historyObject);
                        user.update();
                    }
    } catch (err) {
        res.status(500).json({error:"some error occured !!"});
        console.log(err);
    }
})

module.exports = router;
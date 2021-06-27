require('dotenv').config({path:'./config.env'});
const express = require("express");
const mongoose = require('mongoose');
const cookieParser =require('cookie-parser');

const app = express();


require("./DB/connection");

app.use(express.json());
app.use(cookieParser()) ;
app.use(require('./router/routes'));
app.use(require('./router/create'));
app.use(require('./router/running'));
app.use(require('./router/history'));


let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server launched on port ${port}`);
});
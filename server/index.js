require('dotenv').config({path:'./config.env'});
const express = require("express");
const mongoose = require('mongoose');

const app = express();


require("./DB/connection");

app.use(express.json());
app.use(require('./router/auth'));
app.use(require('./router/create'));
app.use(require('./router/running'));
app.use(require('./router/history'));


let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server launched on port ${port}`);
});
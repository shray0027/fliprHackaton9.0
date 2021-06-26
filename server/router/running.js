const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../DB/connection");

const User = require("../model/userSchema");

module.exports = router;
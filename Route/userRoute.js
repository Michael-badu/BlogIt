const express = require('express');
const {addUser, userLogin} = require('../Controller/user');
const userRoute = express.Router();

userRoute.post("/signup", addUser);
userRoute.post("/login", userLogin);

module.exports = userRoute;
const  User  = require('../models/user') 
const express = require('express'); 
const  userRouter   =  express.Router();
const {Login}  = require('../controllers/user')
userRouter.post('/login' , Login)

module.exports = userRouter;
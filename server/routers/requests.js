const express = require('express'); 
const User = require('../models/user');
const requestRouter = express.Router();
const { userRequest, getRequests } = require('../controllers/request'); 

requestRouter.post('/request', userRequest);
requestRouter.get('/:id/getRequests' , getRequests)
module.exports = requestRouter;

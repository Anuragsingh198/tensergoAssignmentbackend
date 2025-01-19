const Requests = require('../models/request');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const userRequest = asyncHandler(async (req, res) => {
  const { currentUser, data } = req.body;

  console.log("Current User:", currentUser);
  console.log("Request Data:", data);

  try {
    const user = await User.findOne({ googleId: currentUser.googleId });

    if (user) {
      const newRequest = new Requests({
        user: user._id,
        category: data.category,
        comments: data.description,
      });

      await newRequest.save();

      res.status(201).json({
        success: true,
        message: 'Request created successfully',
        request: newRequest,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found for the provided Google ID',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const getRequests = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {

    const user = await User.findOne({ googleId: id });

    if (user) {

      const data = await Requests.find({ user: user._id });

      res.status(200).json({
        success: true,
        requestData: data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found for the provided Google ID',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = { userRequest, getRequests };

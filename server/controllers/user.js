const User = require('../models/user');
const asyncHandler = require('express-async-handler'); 

const Login = asyncHandler(async (req, res) => {
    const currentUser = req.body; 
    console.log(currentUser)
    try {
        let user = await User.findOne({ googleId: currentUser.googleId });
        if (user) {
            return res.status(200).json({ success: true, message: 'User already exists', user });
        }

        const newUser = new User({
            googleId: currentUser.googleId,
            email: currentUser.email,
            name: currentUser.name,
            avatar: currentUser.avatar,
        });
        user = await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = { Login };

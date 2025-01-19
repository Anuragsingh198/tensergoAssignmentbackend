const express = require('express');
const { sendMessageToIntercom } = require('../intercom/intercom');
const messageroutes = express.Router();

messageroutes.post('/send-message', async (req, res) => {
  const { email, message } = req.body;
    console.log("this is the email from messageroutes" ,email.email)
  try {
    await sendMessageToIntercom({ email:email.email, message:email.message });
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in send-message route:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = messageroutes;

const axios = require('axios');
require("dotenv").config();

const INTERCOM_ACCESS_TOKEN = process.env.INTERCOM_ACCESS_TOKEN
const sendMessageToIntercom = async ({ email, message }) => {
    console.log(email)
    console.log(message)
    try {
      const response = await axios.post(
        'https://api.intercom.io/messages',
        {
          from: { type: 'user', id: '678ccea61af29d0cd3d3619f'}, 
          body: message,
        },
        {
          headers: {
            Authorization: `Bearer ${INTERCOM_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending message to Intercom:', error.response?.data || error.message);
    }
  };
  
  module.exports = { sendMessageToIntercom };
  
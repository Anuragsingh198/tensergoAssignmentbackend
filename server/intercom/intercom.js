const axios = require('axios');
require("dotenv").config();
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
            Authorization: `Bearer dG9rOmEyNTZjNjRlXzA3NmVfNDY5NV9hYzVjXzRjNzNhNTllODhlMzoxOjA=`,
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
  
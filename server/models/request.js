const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String,
    enum: [
      'General Queries',
      'Product Features Queries',
      'Product Pricing Queries',
      'Product Feature Implementation Requests',
    ],
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Requests= mongoose.model('ServiceRequest', serviceRequestSchema);

module.exports  = Requests;

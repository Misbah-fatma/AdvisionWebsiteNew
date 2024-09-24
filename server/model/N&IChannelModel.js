const mongoose = require('mongoose');

const NIChannelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ['National', 'International'],
      required: true,
    },
    link: {
      type: String,
    },
    details: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'DetailsChannel' 
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('NIChannel', NIChannelSchema);

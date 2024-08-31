const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
  channel_name: { type: String, required: true },
  channel_address: { type: String, required: true },
  channel_email: { type: String, required: true },
  channel_phone: { type: String, required: true },
  channel_info: { type: String },
  contact_name: { type: String, required: true },
  contact_phone: { type: String, required: true },
  contact_email: { type: String, required: true },
  contact_password: { type: String, required: true },
  channel_address_file: { type: String, required: true  },
  channel_image_file: { type: String, required: true  }, // Add this field to store image path
});

module.exports = mongoose.model('Channel', ChannelSchema);

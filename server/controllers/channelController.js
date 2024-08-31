const Channel = require('../model/ChannelModel');
const cloudinary = require('../middlewares/cloudinary');

// Controller to add a channel
const addChannel = async (req, res) => {
  try {
    const {
      channel_name,
      channel_address,
      channel_email,
      channel_phone,
      channel_info,
      contact_name,
      gender,
      contact_phone,
      contact_email,
      contact_password,
    } = req.body;

    // Handle file uploads using Cloudinary
    let channel_address_file = '';
    let channel_image_file = '';

    if (req.files) {
      if (req.files['channel_address_file']) {
        const addressUpload = await cloudinary.uploader.upload(req.files['channel_address_file'][0].path, {
          folder: 'channels/address_files', // Cloudinary folder structure
        });
        channel_address_file = addressUpload.secure_url; // Get the secure URL for the uploaded file
      }
      if (req.files['channel_image_file']) {
        const imageUpload = await cloudinary.uploader.upload(req.files['channel_image_file'][0].path, {
          folder: 'channels/images', // Cloudinary folder structure
        });
        channel_image_file = imageUpload.secure_url; // Get the secure URL for the uploaded file
      }
    }

    // Create a new Channel document
    const newChannel = new Channel({
      channel_name,
      channel_address,
      channel_email,
      channel_phone,
      channel_info,
      contact_name,
      gender,
      contact_phone,
      contact_email,
      contact_password,
      channel_address_file,
      channel_image_file,
    });

    // Save to the database
    await newChannel.save();

    res.status(201).json({ message: 'Channel information submitted successfully!' });
  } catch (error) {
    console.error('Error submitting channel info:', error);
    res.status(500).json({ message: 'Error submitting channel info' });
  }
};

// Controller to get all channels
const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.status(200).json(channels);
  } catch (error) {
    console.error('Error fetching channels:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addChannel,
  getAllChannels,
};

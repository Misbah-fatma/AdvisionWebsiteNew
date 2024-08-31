const express = require('express');
const { addChannel, getAllChannels } = require('../controllers/channelController');
const multer = require('multer');
const path = require('path');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

// Route to add a channel
router.post('/channel', upload.fields([
  { name: 'channel_address_file', maxCount: 1 },
  { name: 'channel_image_file', maxCount: 1 }
]), addChannel);

// Route to get all channels
router.get('/channels', getAllChannels);

module.exports = router;

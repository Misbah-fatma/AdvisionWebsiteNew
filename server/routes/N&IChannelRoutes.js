const express = require('express');
const router = express.Router();
const NIChannel = require('../model/N&IChannelModel');
const DetailsChannel = require('../model/DetailsChannelsModel');
const cloudinary = require('../middlewares/cloudinary');
const upload = require("../middlewares/multer");

// Route to add NIChannel with details
router.post('/add-channel', upload.single('image'), async (req, res) => {
  try {
      const { title, content, role, link, details } = req.body;

      // First, create and save the DetailsChannel entry
      let savedDetailsChannel = null;
      if (details) {
          const detailsChannel = new DetailsChannel({
              title: details.title,
              text: details.text,
              cards: details.cards,
              features: details.features,
              overview: details.overview,
          });

          savedDetailsChannel = await detailsChannel.save();
      }
      const image = await cloudinary.uploader.upload(req.file.path);
      // Then, create the NIChannel and link the saved DetailsChannel
      const channel = new NIChannel({
          title,
          content,
          image : image.url,
          role,
          link,
          details: savedDetailsChannel ? savedDetailsChannel._id : null,
      });

      // Save the NIChannel to the database
      const savedChannel = await channel.save();

      res.status(201).json({ message: 'Channel and details added successfully', channel: savedChannel });
  } catch (error) {
      res.status(500).json({ message: 'Error adding channel', error });
  }
});

router.get('/channelsAll', async (req, res) => {
  try {
      const channels = await NIChannel.find().populate('details');
      res.status(200).json(channels);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching channels', error });
  }
});


router.get('/getchannelsAll/:channelid', async (req, res) => {
    try {
        const blogId = req.params.channelid;
        const blog = await NIChannel.findById(blogId).populate('details'); // Assuming you populate details if it's a reference

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT /edit-channel/:id
router.put('/edit-channel/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedChannel = await NIChannel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedChannel);
    } catch (error) {
        res.status(500).json({ error: 'Error updating channel' });
    }
});

// DELETE /delete-channel/:id
router.delete('/delete-channel/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await NIChannel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Channel deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting channel' });
    }
});


module.exports = router;
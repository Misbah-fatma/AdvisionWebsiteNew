const express = require('express');
const router = express.Router();
const Blog = require('../model/blogModel');
const Details = require('../model/DetailsModel');
const cloudinary = require('../middlewares/cloudinary');
const upload = require("../middlewares/multer");

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        const { heading, description, link, title, text, cards, features, overview } = req.body;

        // Validate required fields
        if (!heading || !description || !link || !title || !text || !cards || !features || !overview) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        // Upload the image to Cloudinary
        const image = await cloudinary.uploader.upload(req.file.path);

        // Parse the cards field (assuming it's sent as a JSON string)
        const parsedCards = JSON.parse(cards);
        if (!Array.isArray(parsedCards) || parsedCards.length === 0) {
            return res.status(400).json({ message: 'Cards must be a non-empty array' });
        }

        // Create details document
        const details = new Details({
            title,  
            text,
            cards: parsedCards,
            features,
            overview
        });
        await details.save();

        // Create blog document
        const blog = new Blog({
            heading,
            description,
            link,
            image: image.url,
            details: details._id
        });
        await blog.save();

        res.status(201).json({ message: 'Blog created successfully!', blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.get('/blogsall', async (req, res) => {
    try {
        // Fetch all blogs from the database and populate the 'details' field
        const blogs = await Blog.find().populate('details');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/blogsall/:id', async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate('details'); // Assuming you populate details if it's a reference

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




module.exports = router;

// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true }, // Path to the image
    details: { type: mongoose.Schema.Types.ObjectId, ref: 'Details' } // Reference to Details
});

module.exports = mongoose.model('Blog', blogSchema);

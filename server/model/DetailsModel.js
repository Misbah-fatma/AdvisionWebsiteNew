const mongoose = require('mongoose');

// Define a schema for the cards
const cardSchema = new mongoose.Schema({
    icon: { type: String, required: true }, // You can store the icon as a URL or an icon class name
    heading: { type: String, required: true },
    description: { type: String, required: true }
});

const detailsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true }, // Changed from Date to String as it was likely a typo
    cards: [cardSchema], // Use the card schema for each card in the array
    features: { type: String, required: true },
    overview: { type: String, required: true }
});

module.exports = mongoose.model('Details', detailsSchema);

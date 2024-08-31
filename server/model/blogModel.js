const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
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
    link:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

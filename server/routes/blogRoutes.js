const express = require('express');
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const blogController = require('../controllers/blogController');

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

const fileFilter = (req, file, cb) => {
  // Accept only certain file types (e.g., jpeg, png)
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg and .png files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

const router = express.Router();

// Routes
router.post('/blogs', upload.single('image'), createBlog); // Image upload handled here
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', upload.single('image'), updateBlog);
router.delete('/blogs/:id', deleteBlog);


module.exports = router;

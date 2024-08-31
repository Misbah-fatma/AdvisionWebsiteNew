import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const BlogsInternational = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get('/blogs');
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          {blogs
            .filter(blog => blog.role === 'International')
            .map(blog => (
              <div key={blog._id} className="col-md-4 d-flex">
                <div className="card mb-4 d-flex flex-column">
                  {blog.image && (
                    <img
                    src={blog.image}
                      className="card-img-top"
                      alt={blog.title}
                      style={{ height: '200px', objectFit: 'cover' }} // Ensures images have consistent height
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text flex-grow-1">{blog.content.substring(0, 100)}...</p>
                    <a href={blog.link} className="btn btn-primary mt-auto text-white">Read More</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsInternational;

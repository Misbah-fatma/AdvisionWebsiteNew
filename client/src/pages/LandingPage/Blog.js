import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogsall');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />

      <section id="products" className="products section-bg">
        <div className="container">
          <div className="section-title">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
            <h2 className="mb-4">Explore Our Recent Blogs</h2>
            <p className='text-center'>Discover our latest posts and insights.</p>
          </div>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-md-4">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                  {blog.image ? (
                    <img src={blog.image} className="img-fluid mb-3" alt={blog.heading} />
                  ) : (
                    <div className="img-placeholder mb-3">No Image</div>
                  )}
                  <h4 className="title" style={{ color: "#007bff" }}>{blog.heading}</h4>
                  <p className="description">{blog.description}</p>
                  <Link to={`/blog/${blog._id}`} className="btn-get-started animated fadeInUp scrollto">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogList;

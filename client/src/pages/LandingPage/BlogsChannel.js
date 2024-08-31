import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

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
      <Helmet>
        <title>Blogs - Our National Partners</title>
        <meta property="og:title" content="Blogs - Our National Partners" />
        <meta property="og:description" content="Discover stories and updates from our national partners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.advisionslab.com/blogChannel" />
        <meta property="og:image" content="https://www.advisionslab.com/assets/img/hero-img.png" />
        <meta property="og:image:alt" content="Hero image representing national partners" />
        <meta property="og:site_name" content="Advisions Lab" />
        <meta property="og:locale" content="en_US" />

        {/* General Card Tags */}
        <meta name="title" content="Blogs - Our National Partners" />
        <meta name="description" content="Discover stories and updates from our national partners." />
        <meta name="image" content="https://www.advisionslab.com/assets/img/hero-img.png" />
        <meta name="url" content="https://www.advisionslab.com/blogChannel" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Our National Partners",
            "url": "https://www.advisionslab.com/blogChannel",
            "description": "Explore our national partners' stories and updates.",
            "image": "https://www.advisionslab.com/assets/img/hero-img.png",
            "author": {
              "@type": "Organization",
              "name": "Advisions Lab"
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "image": blog.image,
              "author": blog.author,
              "url": blog.link,
              "datePublished": blog.createdAt
            }))
          })}
        </script>
      </Helmet>

      <Navbar />

      <div className="container mt-5">
        <div className="row">
          {blogs
            .filter(blog => blog.role === 'National')
            .map(blog => (
              <div key={blog._id} className="col-md-4 d-flex">
                <div className="card mb-4 d-flex flex-column">
                  {blog.image && (
                    <img
                      src={blog.image}
                      className="card-img-top"
                      alt={blog.title}
                      style={{ height: '200px', objectFit: 'cover' }} // Consistent image height
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text flex-grow-1">{blog.content.substring(0, 100)}...</p>
                    <a href={blog.link} className="btn btn-primary mt-auto text-white ">Read More</a>
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

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
    const blogs = res.data;

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default Blogs;

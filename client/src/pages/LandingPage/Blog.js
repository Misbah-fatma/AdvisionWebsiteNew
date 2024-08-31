import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './News';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Courses() {
  return (
    <>
      <Navbar />

      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title mt-4">
            <h2 className='py-2'>Explore Our Recent AI Blogs</h2>
            <p>Discover our innovative blogs on AI and related technologies, covering a range of topics from robotics to data analysis.</p>
          </div>

          <div className="row portfolio-container">
            {/* Robotic Automation */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/project-1.jpg" className="img-fluid" alt="Robotic Automation"/>
                <div className="portfolio-info">
                  <h4>Robotic Automation</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="Robotic Automation"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/project-2.jpg" className="img-fluid" alt="Machine Learning"/>
                <div className="portfolio-info">
                  <h4>Machine Learning</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="Machine Learning"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/project-3.jpg" className="img-fluid" alt="Data Analysis"/>
                <div className="portfolio-info">
                  <h4>Data Analysis</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="Data Analysis"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FullStack Web Development */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/project-1.jpg" className="img-fluid" alt="FullStack Web Development"/>
                <div className="portfolio-info">
                  <h4>FullStack Web Development</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="FullStack Web Development"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* VLSI */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/project-2.jpg" className="img-fluid" alt="VLSI"/>
                <div className="portfolio-info">
                  <h4>VLSI</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="VLSI"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/bgg1.jpg" className="img-fluid" alt="Microprocessor"/>
                <div className="portfolio-info">
                  <h4>Artificial Intelligence</h4>
                  <p>Coming Soon</p>
                  <div className="portfolio-links">
                    <Link to="/contact" className="venobox" title="Microprocessor"><i className="icofont-eye"></i></Link>
                    <Link to="/contact" title="More Details"><i className="icofont-external-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

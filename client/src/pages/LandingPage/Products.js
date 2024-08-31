import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const Products = () => {
  return (
    <div>
      <Navbar/>

      <section id="portfolio" className="portfolio about">
                    <div className="container" >
                        <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Products</div>
                            <h2>Explore Our Products</h2>
                            <p className='text-center'>Discover our innovative products designed to cater to diverse needs, from educational solutions to cutting-edge AI technologies.</p>
                        </div>

                        <div className="row portfolio-container mt-4">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/SchoolErp.png" className="img-fluid" alt="School ERP" />
                                    <div className="portfolio-info">
                                        <h4>School ERP</h4>
                                        <p>Comprehensive school management software</p>
                                        <div className="portfolio-links">
                                            <a href="assets2/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="School ERP"><i className="icofont-eye"></i></a>
                                            <Link to="/schoolErp" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/Lms.png" className="img-fluid" alt="Learning Management System" />
                                    <div className="portfolio-info">
                                        <h4>Learning Management System (LMS)</h4>
                                        <p>Efficient learning management solutions</p>
                                        <div className="portfolio-links">
                                            <a href="assets2/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Learning Management System"><i className="icofont-eye"></i></a>
                                            <Link to="/lmsDetails" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/TextTranslator.png" className="img-fluid" alt="Text to Text Translator" />
                                    <div className="portfolio-info">
                                        <h4>Text to Text Translator (Offline/Online)</h4>
                                        <p>Accurate text translation services, online and offline</p>
                                        <div className="portfolio-links">
                                            <a href="assets2/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="Text to Text Translator"><i className="icofont-eye"></i></a>
                                            <Link to="/textTranslator" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/OCR.png" className="img-fluid" alt="OCR" />
                                    <div className="portfolio-info">
                                        <h4>OCR (Optical Character Recognition)</h4>
                                        <p>Extract text from images efficiently</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/OCR.png" data-gall="portfolioGallery" className="venobox" title="OCR"><i className="icofont-eye"></i></a>
                                            <Link to="/ocrDeatils" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/RegenerativeAi.png" className="img-fluid" alt="Regenerative AI" />
                                    <div className="portfolio-info">
                                        <h4>Regenerative AI (Based on Indian Education) LLM</h4>
                                        <p>AI solutions tailored for the Indian education system</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/RegenerativeAi.png" data-gall="portfolioGallery" className="venobox" title="Regenerative AI"><i className="icofont-eye"></i></a>
                                            <Link to="/llmDeatils" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/Hospital.png" className="img-fluid" alt="Hospital ERP" />
                                    <div className="portfolio-info">
                                        <h4>Hospital ERP</h4>
                                        <p>Integrated hospital management solutions</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/Hospital.png" data-gall="portfolioGallery" className="venobox" title="Hospital ERP"><i className="icofont-eye"></i></a>
                                            <Link to="/hospitalErp" title="More Details"><i className="icofont-external-link"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <Footer/>   
    </div>
  )
}

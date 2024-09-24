import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import "../../App.css";  // Ensure this path is correct for your styles
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Products = () => {
    return (
        <>
            <Helmet>
                <title>Advisions - Explore Our Products</title>
                <meta name="description" content="Discover our innovative products designed to cater to diverse needs, from educational solutions to cutting-edge AI technologies." />
                <link rel="canonical" href="https://www.advisionslab.com/Products" />
            </Helmet>
            <Navbar />

            <section id="products" className="products about">
                <div className="container">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Products</div>
                        <h2 className="mb-4">Explore Our Products</h2>
                        <p className='text-center'>Discover our innovative products designed to cater to diverse needs, from educational solutions to cutting-edge AI technologies.</p>
                    </div>

                    <div className="row g-4">
                        {/* School ERP */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/SchoolErp.png" className="img-fluid mb-3" alt="School ERP" />
                                <h4 className="title" style={{ color: "#007bff" }}>School ERP</h4>
                                <p className="description">Comprehensive school management software</p>
                                <Link to="/schoolErp" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>

                        {/* Learning Management System (LMS) */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/LMS.png" className="img-fluid mb-3" alt="Learning Management System" />
                                <h4 className="title" style={{ color: "#007bff" }}>Learning Management System (LMS)</h4>
                                <p className="description">Efficient learning management solutions</p>
                                <Link to="/lmsDetails" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>

                        {/* Text to Text Translator */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/TextTranslator.png" className="img-fluid mb-3" alt="Text to Text Translator" />
                                <h4 className="title" style={{ color: "#007bff" }}>Text to Text Translator (Offline/Online)</h4>
                                <p className="description">Accurate text translation services, online and offline</p>
                                <Link to="/textTranslator" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>

                        {/* OCR (Optical Character Recognition) */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/OCR.png" className="img-fluid mb-3" alt="OCR" />
                                <h4 className="title" style={{ color: "#007bff" }}>OCR (Optical Character Recognition)</h4>
                                <p className="description">Extract text from images efficiently</p>
                                <Link to="/ocrDetails" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>

                        {/* Regenerative AI */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/RegenerativeAi.png" className="img-fluid mb-3" alt="Regenerative AI" />
                                <h4 className="title" style={{ color: "#007bff" }}>Regenerative AI (Based on Indian Education) LLM</h4>
                                <p className="description">AI solutions tailored for the Indian education system</p>
                                <Link to="/llmDetails" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>

                        {/* Hospital ERP */}
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">
                                <img src="assets/img/Hospital.png" className="img-fluid mb-3" alt="Hospital ERP" />
                                <h4 className="title" style={{ color: "#007bff" }}>Hospital ERP</h4>
                                <p className="description">Integrated hospital management solutions</p>
                                <Link to="/hospitalErp" className="btn-get-started animated fadeInUp scrollto">
                                    More Details <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

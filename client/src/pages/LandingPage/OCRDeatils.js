import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const OCR = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters d-flex align-items-stretch">
            <div className="col-lg-5 video-box d-flex align-items-stretch">
              <img
                src="assets/img/OCR.png"
                className="img-fluid"
                alt="Optical Character Recognition System"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <a
                href="https://youtube/S42S_a6VFXA"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>About Our OCR System</h2>
                <a href="your-link-here" className="try-now-link m-4" role="button">
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                <p className='mt-4'>
                  Our Optical Character Recognition (OCR) solutions are designed to
                  efficiently extract text from images and scanned documents. Leveraging
                  advanced image processing algorithms, our OCR system offers high
                  accuracy in text recognition across various languages and formats.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-image"></i>
                </div>
                <h4 className="title">
                  <a href="#">Accurate Text Extraction</a>
                </h4>
                <p className="description">
                  Convert scanned documents and images into editable text with high
                  precision, minimizing errors and ensuring reliable data capture.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                <i className="bx bx-book"></i>
                </div>
                <h4 className="title">
                  <a href="#">Multilingual Support</a>
                </h4>
                <p className="description">
                  Recognize text in multiple languages, including Hindi, Tamil, Telugu,
                  Bengali, and more, catering to diverse linguistic needs.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-cog"></i>
                </div>
                <h4 className="title">
                  <a href="#">Customizable Output</a>
                </h4>
                <p className="description">
                  Customize output formats to suit specific needs, such as text files, Word
                  documents, or searchable PDFs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row d-flex">
            <div className="col-lg-9 mt-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="specifications-tab" data-toggle="tab" href="#specifications" role="tab" aria-controls="specifications" aria-selected="true">
                        Specifications
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">
                        Information
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="shipping-tab" data-toggle="tab" href="#shipping" role="tab" aria-controls="shipping" aria-selected="false">
                        Pricing Info
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active mt-4" id="specifications" role="tabpanel" aria-labelledby="specifications-tab">
                      <p>
                        Our OCR system utilizes state-of-the-art algorithms to convert
                        images and scanned documents into editable and searchable text. It
                        supports various formats and ensures high accuracy in text recognition.
                      </p>
                      <p>
                        Key features include support for multiple languages, customizable
                        output formats, and integration capabilities with existing document
                        management systems. The OCR system is optimized for both high-speed
                        processing and accuracy.
                      </p>
                      <p>
                        Suitable for a wide range of applications, from academic research and
                        archival projects to business document processing and more.
                      </p>
                    </div>
                    <div className="tab-pane fade mt-4" id="information" role="tabpanel" aria-labelledby="information-tab">
                      <p>
                        Our OCR system is designed with user accessibility in mind, offering
                        intuitive interfaces and minimal setup requirements. It supports
                        offline functionality and can handle low-resolution images effectively.
                      </p>
                      <p>
                        Additional features include text formatting options, error correction
                        tools, and integration with machine learning models for enhanced
                        recognition capabilities.
                      </p>
                      <p>
                        The system adheres to strict data protection standards to ensure the
                        security and privacy of user data.
                      </p>
                    </div>
                    <div className="tab-pane fade mt-4" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                      <p>
                        Our OCR system is available on a subscription basis, with flexible
                        pricing options for individuals, businesses, and educational institutions.
                      </p>
                      <p>
                        Subscription plans include full access to the OCR features, regular
                        updates, and customer support. We offer discounts for bulk purchases
                        and educational use.
                      </p>
                      <p>
                        Custom packages are available for specialized needs, including advanced
                        integration options and dedicated technical support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-header text-center bg-primary text-white">
                  <h5>Pricing Plan</h5>
                </div>
                <div className="card-body">
                  <h6 className="card-title">Monthly Subscription</h6>
                  <p className="card-text">
                    Access the full suite of our OCR tools for <strong>₹1,000 per month</strong>. This plan includes accurate text extraction, multilingual support, and customizable output formats.
                  </p>
                  <h6 className="card-title">Additional Benefits</h6>
                  <ul>
                    <li>Free trial for the first month</li>
                    <li>Dedicated support for setup</li>
                    <li>Regular software updates</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                <Link to="/contact" className="btn btn-primary">
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OCR;

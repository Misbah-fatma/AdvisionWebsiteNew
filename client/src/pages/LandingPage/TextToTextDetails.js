import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const TextTranslator = () => {

  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5 video-box">
              <img src="assets/img/TextTranslator.png" className="img-fluid" alt="Text Translator" />
              <a href="https://youtube.com/translator-demo" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>About Our Text to Text Translator</h2>
                <a href="your-link-here" className="try-now-link" role="button">
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                <p className='mt-4'>Our Text to Text Translator offers accurate and efficient text translation services, available both online and offline. It supports multiple languages, making communication seamless across various linguistic barriers.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-book"></i></div>
                <h4 className="title"><a href="">Accurate Translations</a></h4>
                <p className="description">Provides high-accuracy translations with support for over 100 languages, ensuring that your content is understood globally.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-cloud-download"></i></div>
                <h4 className="title"><a href="">Offline Mode</a></h4>
                <p className="description">Translate texts without an internet connection, making it ideal for remote work and travel situations.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4 className="title"><a href="">Multiple Formats</a></h4>
                <p className="description">Supports text translation for various document formats including PDFs, Word documents, and plain text files.</p>
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
                      <a className="nav-link active" id="features-tab" data-toggle="tab" href="#features" role="tab" aria-controls="features" aria-selected="true">Features</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="compatibility-tab" data-toggle="tab" href="#compatibility" role="tab" aria-controls="compatibility" aria-selected="false">Compatibility</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="support-tab" data-toggle="tab" href="#support" role="tab" aria-controls="support" aria-selected="false">Support Info</a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active mt-4" id="features" role="tabpanel" aria-labelledby="features-tab">
                      <p>Our Text to Text Translator includes advanced language processing features, offline translation capabilities, and support for various file formats. It is designed to work seamlessly across multiple platforms and devices.</p>
                      <p>The translator supports customizable language packs, ensuring that you can tailor the translation service to your specific needs. It also provides real-time translation, making it ideal for quick communication in meetings or when working with foreign-language documents.</p>
                    </div>
                    <div className="tab-pane fade mt-4" id="compatibility" role="tabpanel" aria-labelledby="compatibility-tab">
                      <p>The translator is compatible with all major operating systems, including Windows, MacOS, iOS, and Android. It integrates easily with your existing software, making the translation process straightforward and efficient.</p>
                      <p>It also supports integration with popular productivity tools like Microsoft Office and Google Workspace, allowing you to translate content directly within your documents.</p>
                    </div>
                    <div className="tab-pane fade mt-4" id="support" role="tabpanel" aria-labelledby="support-tab">
                      <p>Our Text to Text Translator comes with comprehensive customer support, including installation guidance, user manuals, and video tutorials. We offer 24/7 technical assistance to address any issues you may encounter.</p>
                      <p>We also provide regular updates to keep the software aligned with the latest language processing advancements and industry standards.</p>
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
                  <h6 className="card-title">Subscription Charges</h6>
                  <p className="card-text">Our Text to Text Translator is available at an affordable rate of <strong>$20 per month</strong>. This includes access to all features, updates, and 24/7 customer support.</p>
                  <h6 className="card-title">Additional Benefits</h6>
                  <ul>
                    <li>Free initial setup</li>
                    <li>Multi-device access</li>
                    <li>Regular software updates</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">Subscribe Now</a>
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

export default TextTranslator;

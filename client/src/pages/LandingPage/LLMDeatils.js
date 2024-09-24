import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LLMDeatils = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters d-flex align-items-stretch">
            <div className="col-lg-5 video-box d-flex align-items-stretch">
              <img
                src='assets/img/RegenerativeAi.png'
                className="img-fluid"
                alt="Regenerative AI System"
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
                <h2>About Our Regenerative AI</h2>
                <a href="your-link-here" className="try-now-link p-4" role="button" >
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                <p className='mt-4'>
                  Our Regenerative AI solutions are specifically tailored for the Indian education system, harnessing the power of Large Language Models (LLM). The platform provides personalized learning experiences, AI-driven assessments, and content creation, all designed to align with regional languages and local curricula.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-brain"></i>
                </div>
                <h4 className="title">
                  <a href="#">Personalized Learning</a>
                </h4>
                <p className="description">
                  Adaptive AI helps students learn at their own pace, offering personalized content recommendations, interactive lessons, and instant feedback, enhancing the overall educational experience.
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
                  Supports major Indian languages, including Hindi, Tamil, Telugu, Bengali, and more, ensuring inclusivity and accessibility for students from diverse linguistic backgrounds across India.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-test-tube"></i>
                </div>
                <h4 className="title">
                  <a href="#">AI-Driven Assessments</a>
                </h4>
                <p className="description">
                  Conduct formative and summative assessments using AI algorithms that analyze student performance, providing real-time insights to educators for improved learning outcomes.
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
                        Our Regenerative AI system is powered by advanced Large Language Models, trained on vast datasets specific to the Indian education context. It offers curriculum-aligned content, real-time feedback, and personalized learning pathways to meet the unique needs of Indian students and educators.
                      </p>
                      <p>
                        Key features include AI-generated content creation tools for teachers, automated grading systems, and student performance analytics. The system integrates seamlessly with existing digital education platforms and is accessible via both web and mobile apps.
                      </p>
                      <p>
                        Designed to handle a wide range of subjects from primary to higher education, our AI adapts to different grade levels, providing age-appropriate content and assessments that enhance learning outcomes for students in India.
                      </p>
                    </div>
                    <div className="tab-pane fade mt-4" id="information" role="tabpanel" aria-labelledby="information-tab">
                      <p>
                        This AI system emphasizes inclusivity and aims to bridge the digital divide in India by offering offline capabilities and low-data usage modes. It is designed to be user-friendly for students and educators, even those with limited access to technology.
                      </p>
                      <p>
                        The AI platform also supports gamified learning, enhancing student engagement through interactive quizzes, puzzles, and educational games. It encourages self-paced learning while keeping students motivated and engaged.
                      </p>
                      <p>
                        With a focus on data security, our system complies with the highest standards of data protection, ensuring that student and institutional information remains confidential and secure at all times.
                      </p>
                    </div>
                    <div className="tab-pane fade mt-4" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                      <p>
                        Our Regenerative AI system is available on a subscription basis, with flexible pricing models for individual users, schools, and educational institutions. We offer special discounts for government schools and underprivileged communities to enhance accessibility.
                      </p>
                      <p>
                        Subscription plans include access to all features, regular updates, and dedicated customer support. Training sessions and onboarding support are provided to help educators effectively integrate the AI system into their teaching methods.
                      </p>
                      <p>
                        Special packages are available for coaching centers and online education providers, featuring customized AI models and content curation services tailored to specific educational needs within the Indian education system.
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
                    Access the full suite of our AI-powered education tools for <strong>₹1,500 per month</strong>. This plan includes AI assessments, personalized learning, and multilingual support, tailored specifically for the Indian education landscape.
                  </p>
                  <h6 className="card-title">Additional Benefits</h6>
                  <ul>
                    <li>Free trial for the first month</li>
                    <li>Dedicated support for teachers</li>
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

export default LLMDeatils;

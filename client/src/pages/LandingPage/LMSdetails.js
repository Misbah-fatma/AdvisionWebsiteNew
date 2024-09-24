import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LMS = () => {
    return (
        <>
            <Navbar />
            <section id="about" className="about">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-stretch">
                        <div className="col-lg-5 video-box d-flex align-items-stretch">
                            <img
                                src="assets/img/LMS.png"
                                className="img-fluid"
                                alt="Learning Management System"
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
                                <h2>About Our Learning Management System (LMS)</h2>
                                <a href="your-link-here" className="try-now-link" role="button">
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                                <p className='mt-4'>
                                    Our Learning Management System (LMS) is designed to provide an
                                    efficient and comprehensive solution for managing educational
                                    activities. It streamlines course delivery, student management, and
                                    performance tracking with an intuitive interface and robust features.
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-book-open"></i>
                                </div>
                                <h4 className="title">
                                    <a href="#">Course Management</a>
                                </h4>
                                <p className="description">
                                    Create, manage, and deliver courses with ease. Our LMS supports a variety
                                    of content formats, including videos, code editors, and collaborative editors.
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-user"></i>
                                </div>
                                <h4 className="title">
                                    <a href="#">Student Management</a>
                                </h4>
                                <p className="description">
                                    Efficiently manage student profiles, track progress, and communicate
                                    directly through the platform using collaborative editor.
                                </p>
                            </div>

                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-home"></i>
                                </div>
                                <h4 className="title">
                                    <a href="#">Customized Dashboards for Admins, Teachers, and Principals</a>
                                </h4>
                                <p className="description">
                                    Our LMS offers distinct dashboards tailored for different user roles: Admins, Teachers, and Principals. Each dashboard provides relevant features and data, enabling users to manage their specific tasks efficiently.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5 text-justify">
  <div className="row">
    {/* Left Column */}
    <div className="col-lg-9 mt-4">
      <div className="card w-100 h-100">
        <div className="card-body">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="specifications-tab"
                data-toggle="tab"
                href="#specifications"
                role="tab"
                aria-controls="specifications"
                aria-selected="true"
              >
                Specifications
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="information-tab"
                data-toggle="tab"
                href="#information"
                role="tab"
                aria-controls="information"
                aria-selected="false"
              >
                More Information
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="shipping-tab"
                data-toggle="tab"
                href="#shipping"
                role="tab"
                aria-controls="shipping"
                aria-selected="false"
              >
                AI & ML Model for Students
              </a>
            </li>
          </ul>

          <div className="tab-content flex-grow-1 overflow-auto" id="myTabContent" style={{ minHeight: '300px' }}>
            <div
              className="tab-pane fade show active mt-4"
              id="specifications"
              role="tabpanel"
              aria-labelledby="specifications-tab"
            >
              <p>
                Our Learning Management System (LMS) is designed to provide a comprehensive solution for managing educational activities with efficiency and ease. It streamlines course delivery, student management, and performance tracking through an intuitive interface and robust features.
              </p>
              <p>
                <strong>Course Management:</strong> Easily create, manage, and deliver courses with our LMS. It supports a variety of content formats, including video lectures, code editors, and collaborative editors, making it versatile and adaptable to various teaching methods.
              </p>
              <p>
                <strong>Student Management:</strong> Efficiently manage student profiles, track their progress, and facilitate direct communication through the platform’s collaborative editor. This feature ensures a seamless learning experience and effective student engagement.
              </p>
              <p>
                <strong>Customized Dashboards:</strong> Our LMS provides distinct dashboards tailored for Admins, Teachers, and Principals. Each dashboard is equipped with relevant features and data to streamline task management and support role-specific responsibilities.
              </p>
              <p>
Designed to accommodate educational institutions of all sizes, our LMS offers scalability and flexibility to meet diverse teaching and learning needs.
              </p>
            </div>

            <div
              className="tab-pane fade mt-4"
              id="information"
              role="tabpanel"
              aria-labelledby="information-tab"
            >
              <p>
                Our LMS is designed with a focus on enhancing user experience through a variety of interactive and collaborative features. It includes:
              </p>
              <ul className='list-unstyled'>
                <li style={{ fontSize: '14px' }}>
                  <strong>Code Editors: </strong>
                    We provide code editors supporting six programming languages, allowing students to write, compile, and test code directly within the platform. The supported languages include Python, JavaScript, Java, C++, Ruby, and PHP.
                </li>
                <li style={{ fontSize: '14px' }}>
                  <strong>Collaborative Editor: </strong>
                    Students can create and join collaborative rooms, where they can interact with peers and work together on coding projects. The collaborative editor enables real-time code sharing and editing, with the ability to compile code within the shared environment.

                </li>
                <li style={{ fontSize: '14px' }}>
                  <strong>Blockly: </strong>

                    For younger learners or those new to programming, our LMS features Blockly—a visual programming tool that lets students join and manipulate code blocks to create programs. Students can compile and test their block-based code.

                </li>
                <li style={{ fontSize: '14px' }}>
                  <strong>Code Saving and Display: </strong>
                    Students can save their code and view their saved work within the LMS. This feature allows them to track progress, revisit previous projects, and showcase their work.

                </li>
              </ul>
              <p>
                These features are integrated seamlessly into the LMS, enriching the learning experience by fostering collaboration and providing practical coding opportunities.
              </p>
            </div>
            <div className="tab-pane fade mt-4" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
    <p>
        Our LMS offers targeted courses designed to provide both theoretical knowledge and practical application:
    </p>
    <ul className='list-unstyled' style={{ fontSize: '14px' }}>
        <li><strong>Artificial Intelligence (AI):</strong> Explore fundamental and advanced AI concepts. The course includes theoretical lessons followed by practical projects to apply AI techniques.</li>
        <li><strong>Machine Learning (ML):</strong> Learn about machine learning algorithms and their applications. The course combines theory with hands-on exercises to build and implement ML models.</li>
        <li><strong>Case Studies:</strong> Analyze real-world case studies to apply AI and ML concepts in practical scenarios. This course helps students understand how theories are implemented in various industries.</li>
    </ul>
    <p>
        Each course provides a comprehensive learning experience, featuring both in-depth theory and practical exercises.
    </p>
    <p>
        For educational institutions, we offer customizable solutions including:
        <ul>
            <li>Tailored course content</li>
            <li>Additional resources for instructors</li>
            <li>Integration support for seamless implementation</li>
        </ul>
    </p>
</div>

          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-lg-3 mt-4 d-flex align-items-stretch">
      <div className="card w-100 h-100">
        <div className="card-header text-center bg-primary text-white">
          <h5>Pricing Plan</h5>
        </div>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">Monthly Subscription</h6>
          <p className="card-text">
            Access our comprehensive LMS features for <strong>₹2,000 per month</strong>. This plan includes course management, student tracking, and performance analytics.
          </p>
          <h6 className="card-title">Additional Benefits</h6>
          <ul>
            <li>Free trial for the first month</li>
            <li>24/7 customer support</li>
            <li>Regular updates and feature enhancements</li>
          </ul>
        </div>
        <div className="card-footer text-center mt-auto">
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

export default LMS;

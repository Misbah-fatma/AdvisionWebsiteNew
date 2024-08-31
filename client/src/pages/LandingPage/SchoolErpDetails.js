import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SchoolERPSystem = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters d-flex align-items-stretch">
            <div className="col-lg-5 video-box d-flex align-items-stretch">
              <img
                src="assets/img/SchoolErp.png"
                className="img-fluid"
                alt="School ERP System"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <a
                href="https://youtube.com/school-erp-demo"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center about-content">
              <div className="section-title mt-2">
                <h2>About Our School ERP System</h2>
                <a href="your-link-here" className="try-now-link m-4" role="button">
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                <p className='mt-4'>
                  Our School ERP System is specifically designed for Indian schools, providing an all-in-one solution for managing academic and administrative tasks. The platform streamlines daily operations, integrates communication channels, and enhances efficiency across all school departments.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                </div>
                <h4 className="title">
                  <a href="#">Academic Management</a>
                </h4>
                <p className="description">
                  Manage classes, subjects, exams, and report cards seamlessly. Our ERP system offers real-time access to academic records, attendance tracking, and performance analytics.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-user-check"></i>
                </div>
                <h4 className="title">
                  <a href="#">Student Information System</a>
                </h4>
                <p className="description">
                  Keep student data organized and up-to-date, including personal details, academic records, and attendance. Our system provides a centralized database for easy access by teachers and administrators.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-money"></i>
                </div>
                <h4 className="title">
                  <a href="#">Fee Management</a>
                </h4>
                <p className="description">
                  Simplify the fee collection process with automated invoicing, online payments, and detailed financial reports. Parents can pay fees easily, and schools can track payments in real time.
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
                        Information
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pricing-tab"
                        data-toggle="tab"
                        href="#pricing"
                        role="tab"
                        aria-controls="pricing"
                        aria-selected="false"
                      >
                        Pricing Info
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active mt-4"
                      id="specifications"
                      role="tabpanel"
                      aria-labelledby="specifications-tab"
                    >
                      <p>
                        Our School ERP System is equipped with comprehensive features that cater to all academic and administrative needs. It integrates seamlessly with existing school processes and provides tools to manage students, staff, fees, and more.
                      </p>
                      <p>
                        Key features include student enrollment management, attendance tracking, grade reporting, and parent-teacher communication channels. The system also supports timetable scheduling, library management, and transport tracking.
                      </p>
                      <p>
                        Designed to adapt to the unique requirements of Indian schools, the ERP system is customizable and scalable, making it suitable for schools of all sizes, from small private institutions to large public schools.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade mt-4"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <p>
                        Our ERP system emphasizes ease of use, ensuring that all school staff can operate it without extensive training. The user-friendly interface and intuitive design make it accessible for teachers, students, and parents alike.
                      </p>
                      <p>
                        With powerful analytics, the ERP system provides insights into student performance, teacher effectiveness, and school operations, helping administrators make data-driven decisions to improve educational outcomes.
                      </p>
                      <p>
                        The system ensures data privacy and security, adhering to the highest standards of data protection, so schools can rest assured that sensitive information remains safe and confidential.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade mt-4"
                      id="pricing"
                      role="tabpanel"
                      aria-labelledby="pricing-tab"
                    >
                      <p>
                        The School ERP System is available on a flexible subscription model, with plans tailored to the needs of different types of schools. Pricing options include monthly, yearly, and lifetime subscriptions with various features and support levels.
                      </p>
                      <p>
                        We offer discounts for government schools, non-profits, and educational institutions serving underprivileged communities. All subscriptions include free onboarding, training, and 24/7 customer support.
                      </p>
                      <p>
                        Schools can also opt for additional customization services to adapt the system to specific requirements, such as integrating third-party apps or adding unique modules.
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
                    Access our complete ERP suite for <strong>₹2,000 per month</strong>. This plan includes all academic management features, student information system, fee management, and more.
                  </p>
                  <h6 className="card-title">Additional Benefits</h6>
                  <ul>
                    <li>First month free trial</li>
                    <li>Dedicated onboarding support</li>
                    <li>Regular software updates</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Subscribe Now
                  </a>
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

export default SchoolERPSystem;

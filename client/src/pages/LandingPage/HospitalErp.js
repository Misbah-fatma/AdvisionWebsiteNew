import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

const HospitalErp = () => {

  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5 video-box">
              <img src="assets/img/Hospital.png" className="img-fluid" alt="Hospital ERP System" />
              <a href="https://youtube/S42S_a6VFXA" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>About Our Hospital ERP System</h2>
                <a href="your-link-here" className="try-now-link" role="button">
        Try Now <i className="fas fa-arrow-right ms-2"></i>
    </a>
                <p className='mt-4'>Our Hospital ERP system offers comprehensive solutions to manage all aspects of hospital operations, from patient administration to financial management. It integrates various functions into a single platform, ensuring efficient management and improved patient care.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-user-circle"></i></div>
                <h4 className="title"><a href="">Patient Management</a></h4>
                <p className="description">Streamline patient registration, appointment scheduling, and medical records management, providing a seamless experience for both patients and healthcare providers.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-wallet"></i></div>
                <h4 className="title"><a href="">Billing & Financial Management</a></h4>
                <p className="description">Automate billing processes, manage insurance claims, and generate financial reports to ensure accurate and efficient financial management within the hospital.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-pulse"></i></div>
                <h4 className="title"><a href="">Inventory & Supply Chain Management</a></h4>
                <p className="description">Optimize the procurement, storage, and distribution of medical supplies and equipment, ensuring that the hospital operates smoothly and without interruptions.</p>
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
              <a className="nav-link active" id="specifications-tab" data-toggle="tab" href="#specifications" role="tab" aria-controls="specifications" aria-selected="true">Specifications</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">Information</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="shipping-tab" data-toggle="tab" href="#shipping" role="tab" aria-controls="shipping" aria-selected="false">Shipping Info</a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active mt-4" id="specifications" role="tabpanel" aria-labelledby="specifications-tab">
              <p>Our Hospital ERP system includes advanced patient management features, integrated billing, and financial systems, along with robust inventory management tools. The system is compliant with the latest healthcare regulations and supports multi-language and multi-currency functionalities.</p>
              <p>The platform is highly scalable, capable of handling both small clinics and large hospitals with multiple departments. It also offers mobile compatibility, ensuring that healthcare providers can access important data on the go.</p>
              <p>The system integrates with various medical devices and lab equipment, allowing seamless data transfer and reducing manual entry errors. It also supports telemedicine features, enabling virtual consultations and remote patient monitoring, making healthcare more accessible. The ERP includes a powerful appointment scheduling module that reduces patient wait times and optimizes resource allocation. It also provides real-time notifications and reminders to patients, enhancing their experience and engagement. With customizable dashboards and reports, hospital administrators can gain valuable insights into operational efficiency, financial performance, and patient care metrics, allowing for data-driven decision-making and continuous improvement.</p>
            </div>
            <div className="tab-pane fade mt-4" id="information" role="tabpanel" aria-labelledby="information-tab">
              <p>This system is designed to be scalable and flexible, catering to the specific needs of hospitals of all sizes, ensuring improved operational efficiency and patient care. It integrates seamlessly with existing systems, reducing the need for significant. The Hospital ERP system is built with security in mind, featuring data encryption, role-based access control, and audit trails to ensure patient data is protected at all times. It complies with GDPR and HIPAA standards, providing peace of mind regarding data privacy and security.</p>
              <p>The platform supports customizable workflows, allowing hospitals to automate routine tasks such as appointment scheduling, discharge processes, and inventory restocking, freeing up staff to focus on patient care. Its analytics and reporting tools offer real-time insights into hospital performance and patient outcomes. Integration with electronic health records (EHR) allows for a unified patient view, enhancing continuity of care and enabling better clinical decision-making. The system also supports multi-location management, making it ideal for hospital chains and healthcare networks.</p>
              <p>It includes a patient portal that empowers patients to access their medical records, book appointments, and communicate with healthcare providers, improving transparency and engagement in their care journey.</p>
            </div>
            <div className="tab-pane fade mt-4" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
              <p>Our Hospital ERP system is delivered digitally with comprehensive installation and training support to ensure a smooth transition and effective use. The system is backed by 24/7 technical support and periodic updates to keep it aligned with the latest industry standards.</p>
              <p>Installation can be performed remotely or on-site, depending on the client's preferences. We also offer customizable training programs for your staff to ensure they are fully equipped to utilize the system’s features effectively. Our team provides ongoing maintenance and support, including software updates, system optimizations, and troubleshooting services. We also offer data migration assistance to help transition your existing data into the new system with minimal disruption.</p>
              <p>The ERP system comes with detailed user manuals and video tutorials, ensuring that your staff can quickly learn and master the system’s functionalities. We also provide post-installation audits to fine-tune system performance based on actual usage patterns. We offer various subscription models to cater to different needs, including on-premise and cloud-based deployments, allowing you to choose the best option for your operational and budgetary requirements.</p>
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
          <h6 className="card-title">Weekly Charges</h6>
          <p className="card-text">Our Hospital ERP system is available at an affordable rate of <strong>$500 per week</strong>. This includes full access to all features, regular updates, and 24/7 customer support.</p>
          <h6 className="card-title">Additional Benefits</h6>
          <ul>
            <li>Free initial setup</li>
            <li>1-year warranty</li>
            <li>Free updates for the first 6 months</li>
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

export default HospitalErp;

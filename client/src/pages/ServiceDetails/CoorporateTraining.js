import React, {useState} from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const CorporateTraining = () => {
    const [result, setResult] = React.useState("");
    var [show, setshow] = useState(false)
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ad76d720-b8ed-4a9f-bf88-99fbaa9297f8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setshow(true)
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
                <div className="container mt-2 ">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Corporate Training Solutions</h2>
                        <p className="mb-4 text-center">Boost team expertise with customized Corporate Training Solutions for colleges and startups. Enhance learning, drive innovation, and thrive in today's competitive industry.</p>
                    </div>

                    <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-graduation-cap fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Customized Training Programs</h5>
                                        <p className="card-text">Develop tailored training programs that meet the specific needs of your organization. Our solutions are designed to upskill your team and align with your strategic goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-rocket fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Innovation & Skill Development</h5>
                                        <p className="card-text">Empower your team with the latest industry knowledge and innovative practices. Our training programs are designed to foster creativity and drive continuous improvement.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-lightbulb fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Why Choose Our Corporate Training?</h5>
                                        <p className="card-text">Our corporate training solutions are designed to meet the dynamic needs of modern businesses, ensuring your team remains competitive and prepared for future challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="row d-flex">
                        <div className="col-lg-8 mt-4 d-flex align-items-stretch">
                            <div className="card w-100">
                                <div className="card-body">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link active"
                                                id="features-tab"
                                                data-toggle="tab"
                                                href="#features"
                                                role="tab"
                                                aria-controls="features"
                                                aria-selected="true"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link"
                                                id="overview-tab"
                                                data-toggle="tab"
                                                href="#overview"
                                                role="tab"
                                                aria-controls="overview"
                                                aria-selected="false"
                                            >
                                                Overview
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
                                                Pricing
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active mt-4"
                                            id="features"
                                            role="tabpanel"
                                            aria-labelledby="features-tab"
                                        >
                                            <p>
                                                Our corporate training solutions include tailored programs, expert-led workshops, and ongoing support. We focus on real-world applications, ensuring your team can immediately apply what they learn.
                                            </p>
                                            <p>
                                                Programs are designed to be scalable and adaptable, making them suitable for organizations of all sizes and industries.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Our training programs are developed by industry experts and are continuously updated to reflect the latest trends and technologies. We ensure that your team stays ahead in a fast-paced, ever-changing market.
                                            </p>
                                            <p>
                                                We work closely with your organization to identify training needs and deliver customized content that aligns with your goals.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our corporate training solutions, including per-session rates, subscription models, and long-term partnerships. Contact us to discuss your needs and get a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes comprehensive support, regular updates, and ongoing consultation to ensure your training programs remain effective and relevant.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 d-flex align-items-stretch">
                            <div className="card w-100">
                                <div className="card-header text-center bg-primary text-white">
                                    <h5>Contact Us for More Details</h5>
                                </div>
                                <div className="card-body">
                                <div class="col-lg-12">
          {
                                show ? <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    Thanks to Share Your Query With US!!! Our Team Will Contact You Soon!!!
                                </div> : ""
                            }
            <form onSubmit={onSubmit}>
              <div class="form-row">
                <div class="col-lg-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-lg-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
             
            </form>
          </div>
                                </div>
                                <div className="card-footer text-center">
                                <div class="text-center"><button className='btn btn-primary w-40' type="submit">Send Message</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default CorporateTraining;

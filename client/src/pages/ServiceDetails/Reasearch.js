import React,{useState} from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const  Reasearch = () => {
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
                        <h2 className="mb-4">Research and Innovation</h2>
                        <p className="mb-4 text-center">Drive your business forward with our cutting-edge research and innovation services. We explore emerging technologies and trends to create innovative solutions.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-flask fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Cutting-Edge Research</h5>
                                    <p className="card-text">Our research services delve into the latest technologies and trends, providing insights and solutions that keep your business at the forefront of innovation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-rocket fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Innovative Solutions</h5>
                                    <p className="card-text">Transform your business challenges into opportunities with our innovative solutions. We develop and implement strategies that harness emerging technologies for your competitive advantage.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-lightbulb fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Future-Forward Approach</h5>
                                    <p className="card-text">Embrace the future with our forward-thinking approach. We explore new possibilities and trends to help you stay ahead in a rapidly evolving market.</p>
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
                                                id="specifications-tab"
                                                data-toggle="tab"
                                                href="#specifications"
                                                role="tab"
                                                aria-controls="specifications"
                                                aria-selected="true"
                                            >
                                                Features
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
                                            id="specifications"
                                            role="tabpanel"
                                            aria-labelledby="specifications-tab"
                                        >
                                            <p>
                                                Our Research and Innovation services include cutting-edge research into emerging technologies and development of innovative solutions tailored to your business needs. We offer a future-forward approach to help you stay ahead in your industry.
                                            </p>
                                            <p>
                                                We provide comprehensive research, development of innovative solutions, and strategic insights to drive your business forward and enhance your competitive edge.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Our focus on research and innovation aims to provide actionable insights and advanced solutions to meet the evolving demands of the market. We explore new technologies and trends to help your business achieve its goals and stay competitive.
                                            </p>
                                            <p>
                                                By partnering with us, you gain access to a team of experts dedicated to driving your business forward through strategic research and innovative approaches.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our research and innovation services, including project-based fees and consulting agreements. Contact us to discuss your specific needs and receive a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes access to our research expertise, development of innovative solutions, and ongoing support to ensure successful implementation.
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

export default  Reasearch;

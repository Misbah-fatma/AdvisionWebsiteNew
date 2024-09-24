import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const RoboticAutomation = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
                        <h2 className="mb-4">Robotic Automation Solutions</h2>
                        <p className="mb-4 text-center">
                            Enhance operational efficiency with our cutting-edge Robotic Automation solutions designed to streamline workflows and reduce manual efforts.
                        </p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-robot fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Custom Automation Development</h5>
                                        <p className="card-text">
                                            Develop customized robotic automation solutions tailored to your specific needs, whether in manufacturing, logistics, or customer service. Our solutions help automate repetitive tasks, enhance productivity, and reduce costs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-cogs fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Workflow Optimization</h5>
                                        <p className="card-text">
                                            Our robotic automation solutions focus on optimizing workflows and processes to ensure seamless integration with existing systems. Improve efficiency, accuracy, and scalability across your operations with our advanced automation techniques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-industry fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Why Choose Robotic Automation?</h5>
                                        <p className="card-text">
                                            Leverage our expertise in robotic automation to transform your business operations. Our solutions provide cost-effective automation, minimize human errors, and ensure high performance in dynamic environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="row d-flex">
                        <div className="col-lg-9 mt-4 d-flex align-items-stretch">
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
                                                Our Robotic Automation services include custom automation development, workflow optimization, and seamless integration with existing infrastructure. We provide solutions that enhance productivity, reduce costs, and streamline processes.
                                            </p>
                                            <p>
                                                Our services cater to a variety of industries, including manufacturing, healthcare, logistics, and more, with scalable and adaptable automation solutions.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Robotic automation is revolutionizing industries by automating repetitive tasks and optimizing workflows. Our services focus on developing custom automation solutions to enhance efficiency and accuracy while minimizing costs.
                                            </p>
                                            <p>
                                                We work closely with clients to ensure our automation solutions meet their specific needs, providing ongoing support throughout the implementation process and beyond.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our robotic automation services, including project-based pricing, subscription models, and long-term partnerships. Contact us to discuss your requirements and receive a tailored quote.
                                            </p>
                                            <p>
                                                Our pricing includes support, updates, and ongoing consultation to ensure your automation solutions continue to deliver optimal performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-4 d-flex align-items-stretch">
                            <div className="card w-100">
                                <div className="card-header text-center bg-primary text-white">
                                    <h5>Contact Us for Pricing</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Reach out to our team to discuss your robotic automation needs. We provide customized solutions and flexible pricing to fit your budget and project scope.
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#" className="btn btn-primary">
                                        Get a Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RoboticAutomation;

import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const RobotProcess = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Robotics Process Automation</h2>
                        <p className="mb-4 text-center">Enhance business efficiency with RPA, employing software robots to automate<br/> repetitive tasks, streamlining processes with advanced automation technology for increased productivity.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb " id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-robot fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Task Automation</h5>
                                    <p className="card-text">Utilize RPA to automate repetitive tasks, freeing up your team to focus on higher-value activities. Our RPA solutions are designed to integrate seamlessly into your existing processes, increasing efficiency and accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-cogs fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Streamlined Processes</h5>
                                    <p className="card-text">Streamline your business processes with advanced automation technology. Our RPA solutions help reduce errors, save time, and enhance overall productivity, allowing your business to operate more efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Why Choose RPA?</h5>
                                    <p className="card-text">RPA offers a cost-effective way to improve business operations by automating routine tasks. Our solutions are scalable and can be tailored to meet the specific needs of your business, driving growth and innovation.</p>
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
                                                Our RPA services include automating repetitive tasks, streamlining business processes, and integrating automation into existing workflows. We provide customized solutions to enhance efficiency and productivity in various industries.
                                            </p>
                                            <p>
                                                Our RPA solutions are scalable and can be tailored to the specific needs of your business, ensuring optimal performance and seamless integration with your existing systems.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Robotics Process Automation (RPA) revolutionizes how businesses operate by automating routine tasks and processes. Our RPA services are designed to increase productivity, reduce errors, and improve overall efficiency.
                                            </p>
                                            <p>
                                                We collaborate closely with our clients to ensure our RPA solutions meet their specific needs, providing continuous support and updates to keep your operations running smoothly.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our RPA services, including project-based pricing, subscription models, and long-term partnerships. Contact us to discuss your needs and receive a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes ongoing support, updates, and consultation to ensure your RPA solutions continue to deliver maximum value.
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
                                        Reach out to our team to discuss your RPA needs in detail. We provide customized solutions and flexible pricing to fit your budget and project scope.
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

            <Footer/>
        </div>
    );
};

export default RobotProcess;

import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const DigitalTwins = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Digital Twins</h2>
                        <p className="mb-4 text-center">Utilize digital twin technology to create virtual models of assets and processes,<br/> facilitating real-time monitoring and simulation for operational optimization, reduced downtime, and innovation.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-cogs fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Virtual Asset Modeling</h5>
                                    <p className="card-text">Create detailed virtual models of physical assets to monitor their performance in real-time. Digital twins enable precise tracking and analysis, helping you optimize asset management and reduce operational costs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-sync fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Real-Time Monitoring</h5>
                                    <p className="card-text">Monitor processes and systems in real-time using digital twins. Our technology provides instant insights and predictive analytics, enabling timely interventions and proactive maintenance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Operational Optimization</h5>
                                    <p className="card-text">Enhance operational efficiency through simulation and analysis with digital twins. Test scenarios and optimize processes virtually to achieve better performance, reduced downtime, and innovation.</p>
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
                                                Our digital twin solutions include virtual asset modeling, real-time monitoring, and operational optimization. By creating accurate digital replicas of physical assets and processes, we enable enhanced visibility and control over your operations.
                                            </p>
                                            <p>
                                                These solutions are designed to help you achieve better performance, reduce downtime, and foster innovation through advanced simulation and analysis capabilities.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Digital twin technology provides a virtual representation of physical entities, offering real-time insights and simulations. This approach allows for proactive maintenance, optimized operations, and innovative solutions to complex challenges.
                                            </p>
                                            <p>
                                                Our team works with you to integrate digital twins into your existing systems, ensuring seamless functionality and valuable insights for operational excellence.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our digital twin solutions, including project-based and subscription options. Contact us to discuss your specific needs and receive a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes comprehensive support, updates, and consultation to ensure optimal performance and integration of your digital twin technology.
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
                                        Reach out to our team to explore how digital twin technology can benefit your operations. We offer tailored solutions and flexible pricing to fit your specific requirements.
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

export default DigitalTwins;

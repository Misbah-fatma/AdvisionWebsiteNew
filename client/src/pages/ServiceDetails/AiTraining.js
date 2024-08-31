import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const AiTraining = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">AI & Robotics Training</h2>
                        <p className="mb-4 text-center">Offers comprehensive courses in artificial intelligence and robotics, providing hands-on experience in programming, machine learning, and autonomous system development.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l ">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-robot fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Hands-On Robotics Experience</h5>
                                    <p className="card-text">Engage in practical robotics training with hands-on projects, allowing you to build and program robots. Gain practical experience in autonomous system development and robotics engineering.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l ">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-laptop-code fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Advanced AI Programming</h5>
                                    <p className="card-text">Dive into advanced AI programming techniques, including machine learning and neural networks. Learn to develop intelligent systems that can learn and adapt to various tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-cogs fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Comprehensive Course Content</h5>
                                    <p className="card-text">Our courses cover a broad range of topics, from basic programming to complex machine learning algorithms and robotics applications. Designed for various skill levels, these courses prepare you for real-world challenges in AI and robotics.</p>
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
                                                Our AI & Robotics Training programs offer comprehensive coverage of essential skills in artificial intelligence and robotics. With a focus on practical experience and advanced techniques, our courses are designed to equip you with the knowledge needed to excel in these fields.
                                            </p>
                                            <p>
                                                Key offerings include hands-on robotics projects, advanced AI programming, and a wide range of course content suitable for various skill levels.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Our training programs are designed to meet the growing demand for expertise in AI and robotics. Participants gain practical skills through real-world projects and advanced coursework, preparing them for successful careers in these cutting-edge fields.
                                            </p>
                                            <p>
                                                We provide personalized support and guidance throughout the training process to ensure that all participants achieve their learning goals.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our AI & Robotics Training programs are available at competitive rates, with options for individual courses or full training packages. Contact us to get detailed information on pricing and to discuss your specific training needs.
                                            </p>
                                            <p>
                                                We offer flexible payment options and discounts for bulk enrollments, ensuring that our training programs are accessible to a wide range of learners and organizations.
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
                                        Reach out to us for more information on our AI & Robotics Training programs. We offer tailored solutions and flexible pricing to fit your learning objectives and budget.
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

export default AiTraining;

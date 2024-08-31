import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const StemPrograms = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">STEM Programs & ATL Lab Setup</h2>
                        <p className="mb-4 text-center">Transform education with STEM Programs and AI-Robotics Labs, empowering students for future tech challenges.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-cogs fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">STEM Program Development</h5>
                                    <p className="card-text">Our STEM programs are designed to provide students with hands-on experience in science, technology, engineering, and mathematics. We create engaging curricula that foster critical thinking and problem-solving skills essential for future tech challenges.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-robot fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">AI-Robotics Lab Setup</h5>
                                    <p className="card-text">We assist in setting up AI-Robotics labs equipped with the latest technology. These labs provide a collaborative environment for students to explore robotics, AI, and automation, preparing them for future technological advancements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-lightbulb fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Empowering Future Innovators</h5>
                                    <p className="card-text">Our focus is on transforming education by equipping students with the skills and tools necessary for success in a tech-driven world. We prepare the next generation of innovators and leaders through advanced STEM education and practical lab experiences.</p>
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
                                                Our STEM programs and AI-Robotics lab setups offer a comprehensive approach to modern education. We design and implement STEM curricula that engage students in hands-on learning and innovation. Our AI-Robotics labs are equipped with the latest technology to support practical experimentation and learning.
                                            </p>
                                            <p>
                                                These programs and labs are tailored to meet the needs of educational institutions, helping to inspire and prepare students for the challenges of the future tech landscape.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Our services focus on enhancing educational experiences through advanced STEM programs and the setup of cutting-edge AI-Robotics labs. By integrating practical, hands-on learning with theoretical knowledge, we help students develop critical skills and foster a passion for technology.
                                            </p>
                                            <p>
                                                We provide ongoing support and resources to ensure the successful implementation and operation of these educational tools, ensuring students and educators get the most out of the experience.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer customizable pricing plans for our STEM programs and AI-Robotics lab setups. Contact us to discuss your specific requirements and receive a detailed quote tailored to your institution’s needs.
                                            </p>
                                            <p>
                                                Our pricing packages include comprehensive support and training to ensure the effective integration of our programs and labs into your educational environment.
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
                                        Reach out to our team to discuss your STEM programs and AI-Robotics lab setup needs. We offer tailored solutions and flexible pricing to fit your educational goals and budget.
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

export default StemPrograms;

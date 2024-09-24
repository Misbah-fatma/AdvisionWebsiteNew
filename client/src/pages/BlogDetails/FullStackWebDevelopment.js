import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const WebDevelopmentServices = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
                        <h2 className="mb-4">Web Development Solutions</h2>
                        <p className="mb-4 text-center">
                            Empower your business with cutting-edge web development services that provide robust, scalable, and user-friendly web solutions tailored to your specific needs.
                        </p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-code fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Custom Web Application Development</h5>
                                        <p className="card-text">
                                            Build dynamic and responsive web applications that are tailored to meet your unique business needs. Our team specializes in developing web applications that offer a seamless user experience and robust functionality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-laptop-code fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">E-Commerce Solutions</h5>
                                        <p className="card-text">
                                            Develop powerful e-commerce platforms that are scalable, secure, and customizable to enhance your online store’s presence. We integrate advanced features such as payment gateways, user management, and inventory control to drive sales and engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-mobile-alt fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Responsive Web Design</h5>
                                        <p className="card-text">
                                            Create visually appealing and highly functional websites that are optimized for all devices. Our responsive design services ensure that your website looks and performs excellently on desktops, tablets, and mobile devices.
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
                                                Our web development services include creating custom web applications, developing e-commerce platforms, and designing responsive websites. We focus on delivering high-performance, secure, and scalable solutions that enhance your online presence and drive business growth.
                                            </p>
                                            <p>
                                                Our experienced developers leverage the latest technologies and frameworks to build robust web solutions tailored to your unique business needs.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Web development is a critical aspect of any modern business. Our team provides comprehensive web development services, from front-end design to back-end development, ensuring that your website is both visually appealing and functionally robust.
                                            </p>
                                            <p>
                                                We offer a wide range of web development services that cater to various industries, helping businesses establish a strong online presence and engage effectively with their audience.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our pricing is flexible and tailored to the specific needs of each project. We offer competitive rates for web development projects, whether you are looking for a simple website or a complex web application.
                                            </p>
                                            <p>
                                                Contact us to discuss your requirements and get a detailed quote for your web development project. We ensure transparency and flexibility in our pricing to suit your budget and business goals.
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
                                        Reach out to our team for a detailed discussion about your web development needs. We offer customized solutions and flexible pricing to match your business goals.
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

export default WebDevelopmentServices;

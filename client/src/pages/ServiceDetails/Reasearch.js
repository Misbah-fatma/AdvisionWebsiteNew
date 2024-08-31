import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const  Reasearch = () => {
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

                        <div className="col-lg-3 mt-4 d-flex align-items-stretch">
                            <div className="card w-100">
                                <div className="card-header text-center bg-primary text-white">
                                    <h5>Contact Us for Pricing</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Reach out to us for detailed discussions on how our research and innovation services can benefit your business. We offer tailored solutions and flexible pricing to meet your specific needs.
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

export default  Reasearch;

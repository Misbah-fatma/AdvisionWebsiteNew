import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const CorporateAdvice = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Corporate Advice</h2>
                        <p className="mb-4 text-center">Expert consultancy services to businesses, offering strategic guidance on finance,<br/> management, operations, and organizational development to optimize performance and achieve long-term success.</p>
                    </div>

                <section className="tm-section-3 tm-section-mb" id="tm-section-3">
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Strategic Finance Guidance</h5>
                                    <p className="card-text">Receive expert advice on financial management, including budgeting, forecasting, and investment strategies. Our consultants help you navigate complex financial landscapes to enhance profitability and financial stability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-cogs fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Operational Excellence</h5>
                                    <p className="card-text">Optimize your business operations with our expert consultancy. We provide strategic guidance to streamline processes, improve efficiency, and enhance overall performance, helping you achieve operational excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-users fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Organizational Development</h5>
                                    <p className="card-text">Enhance your organization’s structure and culture with our expert advice. We offer insights and strategies for leadership development, team building, and organizational growth to support long-term success.</p>
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
                                                Our Corporate Advice services provide comprehensive consultancy across various business areas. From finance and operations to organizational development, we offer expert guidance tailored to your company's specific needs.
                                            </p>
                                            <p>
                                                Key services include strategic financial planning, operational optimization, and organizational development to support your business's growth and long-term success.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Our consultancy services are designed to help businesses enhance performance and achieve strategic goals. We offer personalized advice and practical solutions to tackle complex challenges and drive business success.
                                            </p>
                                            <p>
                                                Our team of experts works closely with you to understand your unique challenges and provide actionable insights to improve your business operations and management practices.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing options for our corporate advice services, including project-based fees and ongoing consultancy agreements. Contact us to discuss your needs and receive a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes access to our full range of consultancy services, with additional options for tailored solutions and extended support as needed.
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
                                        Reach out to us for expert consultancy services that can help optimize your business performance. We provide tailored solutions and flexible pricing to meet your strategic needs.
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

export default CorporateAdvice;

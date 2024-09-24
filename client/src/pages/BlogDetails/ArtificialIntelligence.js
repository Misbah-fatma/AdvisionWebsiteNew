import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const AIServices = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
                        <h2 className="mb-4">Artificial Intelligence Solutions</h2>
                        <p className="mb-4 text-center">
                            Transform your business with our state-of-the-art Artificial Intelligence solutions. We offer a comprehensive<br/> suite of AI services designed to empower organizations to harness the full potential of data-driven decision-making.
                        </p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-brain fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Machine Learning Model Development</h5>
                                        <p className="card-text">
                                            We specialize in developing machine learning models tailored to your business needs. From supervised learning to deep learning, our models provide accurate predictions and valuable insights to help drive better decision-making.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-robot fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Natural Language Processing (NLP)</h5>
                                        <p className="card-text">
                                            Our NLP solutions enable machines to understand, interpret, and generate human language, enhancing customer support, sentiment analysis, and content categorization through advanced text analytics and chatbot development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Predictive Analytics</h5>
                                        <p className="card-text">
                                            Harness the power of data with our predictive analytics services. We build models that forecast trends, customer behavior, and potential risks, enabling businesses to make proactive, data-driven decisions.
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
                                                Our AI services cover a broad spectrum of applications, including machine learning model development, NLP solutions, and predictive analytics. We utilize the latest technologies to provide custom AI solutions for various industries.
                                            </p>
                                            <p>
                                                Whether you are looking to enhance customer engagement, optimize operations, or gain deeper insights from your data, our AI services are designed to meet your specific needs.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Artificial Intelligence is revolutionizing industries worldwide. Our AI solutions encompass machine learning, NLP, and predictive analytics to enable organizations to leverage their data for strategic advantage.
                                            </p>
                                            <p>
                                                With a team of seasoned AI experts and a commitment to innovation, we provide scalable AI solutions that deliver measurable impact.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our pricing is designed to be flexible and aligned with your project's scope and complexity. Whether you need a comprehensive AI strategy or specific AI models, we offer competitive rates to match your requirements.
                                            </p>
                                            <p>
                                                Contact us to discuss your AI needs and get a tailored quote with clear pricing options.
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
                                        Reach out to our team to explore how our AI solutions can transform your business. We offer customized AI services tailored to your specific needs.
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

export default AIServices;

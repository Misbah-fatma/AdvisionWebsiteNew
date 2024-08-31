import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const AdvancedGeAi = () => {
    return (
        <div>
            <Navbar/>
            <section id="about" className="about ">
            <div className="container mt-2 ">
                <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Advanced Generative AI Development</h2>
                        <p className="mb-4 text-center">Unlock the full potential of Generative AI with cutting-edge techniques and customized solutions designed to meet the unique needs of your projects.</p>
                    </div>

                <section>
                    <div className="row">
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l ">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-database fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Custom AI Model Training</h5>
                                    <p className="card-text">Leverage Generative AI to train custom models tailored to your specific datasets, whether you're working with text, images, or other media. Our solutions are designed to help you generate high-quality, original content that meets your unique requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-mb-sm-4 tm-2col-l ">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-magic fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Innovative Content Generation</h5>
                                    <p className="card-text">Harness the power of generative models to create original, innovative content. From art and music to written content, our AI development services open up new possibilities for creativity and automation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 tm-2col-r ">
                            <div className="card border-0 shadow h-100">
                                <div className="card-body text-center">
                                    <div className="icon-boundary mx-auto mb-3">
                                        <i className="fas fa-lightbulb fa-2x tm-icon"></i>
                                    </div>
                                    <h5 className="card-title">Why Choose Advanced Generative AI?</h5>
                                    <p className="card-text">Our advanced generative AI solutions are at the forefront of technological innovation, offering unparalleled opportunities for creativity, efficiency, and problem-solving in various industries.</p>
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
                                                Our advanced generative AI development services include custom model training, innovative content generation, and integration with existing workflows. Whether you need a tailored AI model or a full suite of tools, we provide solutions to meet your needs.
                                            </p>
                                            <p>
                                                Our services are scalable and customizable, ensuring they can be adapted to various industries, including education, healthcare, and entertainment.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="information"
                                            role="tabpanel"
                                            aria-labelledby="information-tab"
                                        >
                                            <p>
                                                Generative AI is transforming industries by enabling the creation of original content at scale. Our services focus on developing advanced AI models that can generate high-quality content, from text and images to music and beyond.
                                            </p>
                                            <p>
                                                We work closely with our clients to ensure that our AI models meet their specific needs, providing support throughout the development process and beyond.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                We offer flexible pricing models for our generative AI development services, including project-based pricing, subscription models, and long-term partnerships. Contact us to discuss your needs and get a customized quote.
                                            </p>
                                            <p>
                                                Our pricing includes support, updates, and ongoing consultation to ensure your AI models continue to perform optimally.
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
                                        Reach out to our team for a detailed discussion of your generative AI development needs. We provide tailored solutions and flexible pricing to fit your budget and project scope.
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

export default AdvancedGeAi;

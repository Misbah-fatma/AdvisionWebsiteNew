import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const MachineLearningServices = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
                        <h2 className="mb-4">Machine Learning Development and Integration</h2>
                        <p className="mb-4 text-center">Unlock the potential of Machine Learning with tailored solutions that fit your business needs and drive innovation through data-driven insights and automation.</p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-cogs fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Custom Machine Learning Models</h5>
                                        <p className="card-text">Develop custom machine learning models tailored to your specific business needs. From predictive analytics to recommendation systems, our solutions are designed to enhance decision-making processes and operational efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Data Analysis and Insights</h5>
                                        <p className="card-text">Transform your raw data into actionable insights with our advanced data analysis services. We help businesses derive meaningful patterns and trends that drive growth and strategic decision-making.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-robot fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Machine Learning Integration</h5>
                                        <p className="card-text">Seamlessly integrate machine learning models into your existing software systems. Our solutions ensure smooth integration, scalability, and minimal disruption to your business operations.</p>
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
                                                Our machine learning services include custom model development, data analysis, and seamless integration into existing workflows. We provide tailored solutions to meet the unique needs of various industries such as finance, healthcare, and e-commerce.
                                            </p>
                                            <p>
                                                Our offerings are flexible and scalable, ensuring they can grow alongside your business and adapt to evolving challenges and opportunities.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Machine learning is revolutionizing how businesses operate by enabling data-driven decision-making and process automation. Our services help you leverage the power of machine learning to create value from your data and enhance operational efficiency.
                                            </p>
                                            <p>
                                                We work closely with our clients to ensure that our machine learning models and solutions are perfectly aligned with their strategic goals, providing support and consultation throughout the project lifecycle.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our pricing models are designed to be flexible and scalable, including options for project-based pricing, subscription models, and long-term engagements. Contact us to discuss your requirements and get a personalized quote.
                                            </p>
                                            <p>
                                                Pricing includes comprehensive support, continuous model updates, and ongoing consultation to ensure optimal performance of your machine learning solutions.
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
                                        Reach out to our team for a detailed discussion about your machine learning development needs. We offer customized solutions and flexible pricing to match your business goals.
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

export default MachineLearningServices;

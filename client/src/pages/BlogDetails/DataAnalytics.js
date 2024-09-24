import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const DataAnalysisServices = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Blogs</div>
                        <h2 className="mb-4">Data Analysis Solutions</h2>
                        <p className="mb-4 text-center">
                            Leverage the power of data to drive strategic decisions and achieve business excellence.<br/> Our data analysis services help you unlock valuable insights from your data.
                        </p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-chart-line fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Descriptive Data Analysis</h5>
                                        <p className="card-text">
                                            Understand the past to predict the future. Our descriptive analysis services provide a comprehensive overview of historical data to help you identify patterns, trends, and insights crucial for informed decision-making.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-search-plus fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Predictive Data Modeling</h5>
                                        <p className="card-text">
                                            Predict future outcomes with precision. Our predictive modeling services use advanced statistical techniques and machine learning algorithms to forecast future trends and behavior, enabling proactive business strategies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-database fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Data Visualization and Reporting</h5>
                                        <p className="card-text">
                                            Transform complex data into clear, actionable insights with our data visualization and reporting services. We use interactive dashboards and visualizations to make data more understandable and useful for stakeholders.
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
                                                Our data analysis services include descriptive analysis, predictive modeling, and data visualization. We help businesses unlock hidden insights from their data, enabling them to make data-driven decisions and strategies.
                                            </p>
                                            <p>
                                                Our team of experts leverages advanced statistical techniques and machine learning algorithms to provide reliable and insightful data analysis.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                Data analysis is critical for modern businesses to stay competitive. Our comprehensive services range from analyzing historical data to predicting future outcomes, providing a solid foundation for decision-making and strategy.
                                            </p>
                                            <p>
                                                We help businesses across industries make sense of their data, uncovering actionable insights that drive growth and efficiency.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our pricing is designed to be flexible, catering to the specific needs of each client. Whether you need a one-time data analysis project or ongoing support, we offer competitive rates to fit your budget.
                                            </p>
                                            <p>
                                                Contact us to discuss your requirements and get a personalized quote for your data analysis needs. We provide transparent pricing and tailored solutions to help you achieve your business objectives.
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
                                        Get in touch with our team to discuss your data analysis requirements. We offer customized solutions to help you extract meaningful insights from your data.
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

export default DataAnalysisServices;

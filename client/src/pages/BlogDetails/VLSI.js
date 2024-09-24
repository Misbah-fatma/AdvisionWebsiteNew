import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';

const VLSIServices = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="about">
                <div className="container mt-2">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">VLSI Design and Development Services</h2>
                        <p className="mb-4 text-center">
                            Empowering innovation through state-of-the-art VLSI design and development services. Our team of experts provides comprehensive<br/> solutions from concept to silicon, ensuring high-performance, reliable, and cost-effective chip designs.
                        </p>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-microchip fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">ASIC Design Services</h5>
                                        <p className="card-text">
                                            Our Application-Specific Integrated Circuit (ASIC) design services focus on delivering customized solutions tailored to meet specific requirements. From RTL design to GDSII, we provide end-to-end ASIC design and verification solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-mb-sm-4 tm-2col-l">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-drafting-compass fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">FPGA Design and Development</h5>
                                        <p className="card-text">
                                            Our FPGA design services offer a flexible and fast solution for prototyping and product development. We cover architecture design, coding, simulation, synthesis, and optimization for various FPGA platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 tm-2col-r">
                                <div className="card border-0 shadow h-100">
                                    <div className="card-body text-center">
                                        <div className="icon-boundary mx-auto mb-3">
                                            <i className="fas fa-sitemap fa-2x tm-icon"></i>
                                        </div>
                                        <h5 className="card-title">Physical Design and Verification</h5>
                                        <p className="card-text">
                                            We offer comprehensive physical design and verification services, including floorplanning, placement, routing, clock tree synthesis, and timing closure to ensure optimal performance and manufacturability of your chips.
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
                                                Our VLSI services include ASIC design, FPGA design, and physical design and verification. We ensure high performance, reliability, and cost efficiency from design to silicon.
                                            </p>
                                            <p>
                                                With a deep understanding of VLSI technologies, we cater to various industry sectors, offering custom solutions that fit specific needs.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <p>
                                                VLSI design is at the heart of modern electronics. Our comprehensive services span from ASIC and FPGA design to physical design and verification, providing clients with cutting-edge solutions for their semiconductor needs.
                                            </p>
                                            <p>
                                                We combine industry expertise with advanced tools and methodologies to deliver best-in-class VLSI design services.
                                            </p>
                                        </div>
                                        <div
                                            className="tab-pane fade mt-4"
                                            id="pricing"
                                            role="tabpanel"
                                            aria-labelledby="pricing-tab"
                                        >
                                            <p>
                                                Our pricing is flexible and based on the specific requirements and scope of the project. Whether you need complete VLSI design services or specific modules, we offer competitive rates.
                                            </p>
                                            <p>
                                                Contact us to discuss your VLSI design and development needs, and get a tailored solution with transparent pricing.
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
                                        Get in touch with our team to discuss your VLSI design and development requirements. We provide customized solutions for all stages of VLSI development.
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

export default VLSIServices;

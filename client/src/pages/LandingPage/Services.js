import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../../App.css";
import { Helmet } from 'react-helmet';

export default function Services() {
    return (
        <>
            <Helmet>
                {/* General SEO Tags */}
                <title> Advisions - Our Innovative Solutions for Your Business</title>
                <meta name="description" content="Elevate your business with personalized solutions crafted to align with your requirements, maximizing your potential for success." />
                <meta name="keywords" content="Generative AI, Corporate Training, Robotics Process Automation, Web Development, Digital Twins, AI Training, Robotics Training, STEM Programs, ATL Lab Setup, Custom Software Development, Innovation Services, Consultancy, Strategic Guidance, Research and Innovation, Automation Technology, Operational Efficiency, Machine Learning, Autonomous Systems, Industry Solutions, Digital Transformation" />
                <link rel="canonical" href="https://www.advisionslab.com/Services" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Advisions - Our Innovative Solutions for Your Business" />
                <meta property="og:description" content="Elevate your business with personalized solutions crafted to align with your requirements." />
                <meta property="og:url" content="https://www.advisionslab.com/Services" />
                <meta property="og:image" content="https://www.advisionslab.com/logo.png" />
                <meta property="og:site_name" content="Advisions" />

                {/* Structured JSON-LD Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Our Innovative Solutions",
                        "description": "Elevate your business with personalized solutions crafted to align with your requirements.",
                        "serviceType": ["Generative AI", "Corporate Training", "Web Development"],
                        "provider": {
                            "@type": "Organization",
                            "name": "Advisions",
                            "url": "https://www.advisionslab.com/Services"
                        }
                    })}
                </script>
            </Helmet>
            <Navbar />
            <section id="services" className="services about">
                <div className="container">
                    <div className="section-title">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-4">Our Services</div>
                        <h2 className="mb-4">Our Innovative Solutions for Your Business</h2>
                        <p className='text-center'>Elevate your business with personalized solutions crafted to precisely align with your requirements, maximizing your potential for success.</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon"><i className="icofont-computer"></i></div>
                                <h4 className="title"><a href="#">Advanced Generative AI Development</a></h4>
                                <p className="description">Train your dataset to generate original outputs such as images, text, or music using state-of-the-art generative AI techniques.</p>
                            <a href="/advancedGeAi" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon mt-4"><i className="icofont-chart-bar-graph"></i></div>
                                <h4 className="title"><a href="#">Corporate Trainings</a></h4>
                                <p className="description">Boost team expertise with customized Corporate Training Solutions. Enhance learning, drive innovation, and thrive in today's competitive industry.</p>
                                <a href="/corporateTraining" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon mt-4"><i className="icofont-earth"></i></div>
                                <h4 className="title"><a href="#">Robotics Process Automation</a></h4>
                                <p className="description">Enhance business efficiency with RPA, employing software robots to automate repetitive tasks, streamlining processes with advanced automation technology for increased productivity.</p>
                                <a href="/robotProcess" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon"><i className="icofont-image"></i></div>
                                <h4 className="title"><a href="#">Custom Web Application Development</a></h4>
                                <p className="description">Leverage our tailor-made services to address your specific industry needs, cater to your target audience, and enhance operational efficiency.</p>
                                <a href="/customWeb" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon"><i className="icofont-settings"></i></div>
                                <h4 className="title"><a href="#">STEM Programs & ATL Lab Setup</a></h4>
                                <p className="description">Transform education with STEM Programs and AI-Robotics Labs, empowering students for future tech challenges.</p>
                                <a href="/stemPrograms" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon mt-4"><i className="icofont-tasks-alt"></i></div>
                                <h4 className="title"><a href="#">Digital Twins</a></h4>
                                <p className="description">Utilize digital twin technology to create virtual models of assets and processes, facilitating real-time monitoring and simulation for operational optimization, reduced downtime, and innovation.</p>
                                <a href="/digitalTwins" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon mt-4"><i className="icofont-robot"></i></div>
                                <h4 className="title"><a href="#">AI & Robotics Training</a></h4>
                                <p className="description">Offers comprehensive courses in artificial intelligence and robotics, providing hands-on experience in programming, machine learning, and autonomous system development.</p>
                                <a href="/aiTraining" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon mt-4"><i className="icofont-business-man"></i></div>
                                <h4 className="title"><a href="#">Corporate Advice</a></h4>
                                <p className="description">Expert consultancy services to businesses, offering strategic guidance on finance, management, operations, and organizational development to optimize performance and achieve long-term success.</p>
                                <a href="/corporateAdvice" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-item d-flex flex-column justify-content-center text-center rounded h-100 shadow border p-3">

                                <div className="icon"><i className="icofont-light-bulb"></i></div>
                                <h4 className="title"><a href="#">Research and Innovation</a></h4>
                                <p className="description">Drive your business forward with our cutting-edge research and innovation services. We explore emerging technologies and trends to create innovative solutions.</p>
                                <a href="/reasearch" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

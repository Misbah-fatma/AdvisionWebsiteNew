import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {

    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    useEffect(() => {
        // Fetch data from your API
        axiosInstance.get('/') // Replace with your actual API endpoint
            .then(response => {
                setCarouselData(response.data); // Assuming the response is an array of items
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Navbar />

            <section id="hero" className='text-justify'>
                <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">


                            {carouselData.map((item, index) => (
                                <div
                                    key={item._id}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${item.pic})` }} // Use item.pic for background image
                                >
                                    <div className="carousel-container">
                                        <div className="carousel-content container">
                                            <h2 className="animated fadeInDown">
                                                Welcome to <span>{item.name}</span>
                                            </h2>
                                            <p className="animated fadeInUp text-justify">
                                                {item.description}
                                            </p>
                                            <a href="#about" className="btn-get-started animated fadeInUp scrollto">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}




                        </div>

                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
            </section>

            <main id="main" className='text-justify'>


                <section id="about" className="about">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 video-box">
                                <img src="assets2/img/about.jpg" className="img-fluid" alt="" />
                                <a href="https://www.youtube.com/watch?v=S42S_a6VFXA" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                            </div>

                            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <p className='text-center'>Leading tech firm pioneering innovative solutions in diverse domains. At Advisions R&D, we are a leading tech and research company dedicated to providing innovative services and solutions across various fields.</p>
                                </div>

                                <div className="icon-box" >
                                    <div className="icon"><i className="bx bx-rocket"></i></div>
                                    <h4 className="title"><a href="">Generative AI Development</a></h4>
                                    <p className="description text-justify">Specializing in tailored ChatGPT development and integration, along with advanced large language models (LLMs) to drive innovation.</p>
                                </div>

                                <div className="icon-box" >
                                    <div className="icon"><i className="bx bx-code"></i></div>
                                    <h4 className="title"><a href="">Custom Development</a></h4>
                                    <p className="description text-justify">Offering custom web and mobile app development, secure enterprise software, MVP development, and strategic consulting.</p>
                                </div>

                                <div className="icon-box" >
                                    <div className="icon"><i className="bx bx-lock"></i></div>
                                    <h4 className="title"><a href="">Education & Training</a></h4>
                                    <p className="description text-justify">Providing school management software, STEM programs, ATL lab setup, corporate training, and robotics process automation.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>





                <div className="container">
                    <div className="row text-center">

                        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                            <div className="count-box py-4 px-3 bg-light rounded shadow-sm">
                                <i className="icofont-simple-smile" style={{ color: "#20b38e", fontSize: "2rem" }}></i>
                                <h3 className="my-3" data-toggle="counter-up">232</h3>
                                <p className="mb-0">Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box py-4 px-3 bg-light rounded shadow-sm">
                                <i className="icofont-document-folder" style={{ color: "#c042ff", fontSize: "2rem" }}></i>
                                <h3 className="my-3" data-toggle="counter-up">521</h3>
                                <p className="mb-0">Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="count-box py-4 px-3 bg-light rounded shadow-sm">
                                <i className="icofont-live-support" style={{ color: "#46d1ff", fontSize: "2rem" }}></i>
                                <h3 className="my-3" data-toggle="counter-up">1,463</h3>
                                <p className="mb-0">Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="count-box py-4 px-3 bg-light rounded shadow-sm">
                                <i className="icofont-users-alt-5" style={{ color: "#ffb459", fontSize: "2rem" }}></i>
                                <h3 className="my-3" data-toggle="counter-up">15</h3>
                                <p className="mb-0">Hard Workers</p>
                            </div>
                        </div>

                    </div>
                </div>

                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-4">
                            <h2 className="display-6 text-primary">Why Choose Us</h2>
                            <p className="lead">
                                We're Best in AI Industry with 5 Years of Experience
                            </p>
                        </div>

                        <div className="row">
                            {/* Main card */}
                            <div className="col-md-12 mb-4">
                                <div className="card shadow-lg border-0">
                                    <div className="row g-0 align-items-center text-justify">
                                        {/* Image or Illustration */}
                                        <div className="col-md-4">
                                            <img
                                                src="assets/img/feature.jpg"
                                                alt="AI Team"
                                                className="img-fluid rounded-start h-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>

                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title text-primary">
                                                    Choose us for AI Tech and Software
                                                </h4>
                                                <p className="card-text">
                                                    Expertise, innovation, proven track record, scalable
                                                    solutions, customer-centric approach, robust support,
                                                    cost-effectiveness, security, and a collaborative
                                                    partnership.
                                                </p>

                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <i className="bi bi-award-fill text-success me-2"></i>
                                                        We boast a team of industry-leading professionals
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i className="bi bi-alarm-fill text-warning me-2"></i>
                                                        Timely, precise solutions delivered comprehensively with
                                                        efficacy
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i className="bi bi-lightbulb-fill text-info me-2"></i>
                                                        Innovative product development with maintenance and
                                                        updates
                                                    </li>
                                                </ul>
                                                <div className="d-flex justify-content-around mt-4">
                                                    <div className="text-center">
                                                        <h3 className="text-primary">150+</h3>
                                                        <p className="text-muted">Innovative Products</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="text-primary">200,000+</h3>
                                                        <p className="text-muted">Users Served</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="text-primary">95%</h3>
                                                        <p className="text-muted">Customer Satisfaction</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Cards for Highlighted Features */}
                            <div className="col-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-gear-fill display-4 text-primary mb-3"></i>
                                        <h5 className="card-title">Expertise & Innovation</h5>
                                        <p className="card-text">
                                            Leading-edge AI solutions with a track record of excellence
                                            and creativity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-person-check-fill display-4 text-success mb-3"></i>
                                        <h5 className="card-title">Customer-Centric Approach</h5>
                                        <p className="card-text">
                                            Focused on delivering tailored solutions that exceed
                                            expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-shield-lock-fill display-4 text-danger mb-3"></i>
                                        <h5 className="card-title">Robust Security</h5>
                                        <p className="card-text">
                                            Prioritizing security and compliance in every solution we
                                            develop.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="about" className="about ">
                    <div className="container">
                        <div class="row gy-5 gy-lg-0 align-items-lg-center">
                            <div class="col-12 col-lg-6 mb-3">
                                <img class="img-fluid rounded" loading="lazy" src="./assets/img/about-img-1.png" alt="" />
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row justify-content-xl-end">
                                    <div class="col-12 col-xl-11">
                                        <div className="section-title mt-4">
                                            <h2>Our optimistic
                                                methods will let you prefer us.</h2>
                                            <p className='text-center '>Here are the leading reasons to prefer us for your brand. We believe in transparency without any hidden barriers.</p>
                                        </div>
                                        <div class="accordion accordion-flush" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Highly Competitive Rates
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show text-justify" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        We offer some of the most competitive rates in the industry, without sacrificing quality. We understand that cost is an important factor when choosing a service provider, and we are committed to providing our clients with the best possible value for their money.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Contemporary Skills
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        Our team is made up of highly skilled and experienced professionals who are up-to-date on the latest trends and technologies. We are constantly investing in our team's development to ensure that we can provide our clients with the highest level of service.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Top Notch Support
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        We are committed to providing our clients with top-notch support. Our team is available 24/7 to answer your questions and resolve any issues you may encounter. We believe that our support is one of our greatest strengths, and we are proud to offer it to our clients.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <div className="newsletter-subscribe container">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center newsletter">Stay Updated with Our Latest News</h2>
                            <p className="text-center">
                                Sign up for our newsletter to receive the latest updates, exclusive offers, and insightful content directly to your inbox. Join our community and stay ahead with the most recent information and updates.
                            </p>
                        </div>
                        <form className="form-inline" method="post">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <button className="btn" type="button" style={{ backgroundColor: '#1c5c93', color: '#fff', border: 'none' }}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>



            <Footer />


        </>
    )
}

export default Home

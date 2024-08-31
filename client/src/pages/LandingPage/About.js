import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <section class="about">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src="assets/img/blog-2.jpg" alt="Product Image"/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7 mb-3">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <div className="section-title text-center">
            <h2 className='pt-4'>Who Are We?</h2>
            <p>We specialize in creating innovative products that enhance everyday life. Our commitment is to deliver high-quality, cutting-edge solutions to meet the evolving needs of our customers.</p>
          </div>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                      <path d="M1.5 0a.5.5 0 0 1 .5.5V1h1v-.5a.5.5 0 0 1 1 0V1h8V.5a.5.5 0 0 1 1 0V1h1v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5v8H15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1h-1v1a.5.5 0 0 1-1 0v-1H2v1a.5.5 0 0 1-1 0v-1H.5A.5.5 0 0 1 0 12v-1a.5.5 0 0 1 .5-.5h.5V2H.5A.5.5 0 0 1 0 1V0a.5.5 0 0 1 .5-.5h1zM1 2v8h14V2H1z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3">Innovative Solutions</h2>
                    <p class="text-secondary mb-0">We are committed to designing products that integrate the latest technology with user-centric design, ensuring exceptional performance and satisfaction.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-puzzle" viewBox="0 0 16 16">
                      <path d="M6.5 1a.5.5 0 0 1 .5.5V2h2v-.5a.5.5 0 0 1 1 0V2h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H10v2h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H10v2h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5v-1H8v1a.5.5 0 0 1-1 0v-1H5.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H6v-2H5.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H6V2H5.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H6zM8 6V4H6v2H4v2h2v2h2V8h2V6H8z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3">Exceptional Quality</h2>
                    <p class="text-secondary mb-0">We ensure that every product we create meets the highest standards of quality, reliability, and durability to provide an outstanding user experience.</p>
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

      <section id="team" className="team about">
        <div className="container">
          <div className="section-title text-center">
            <h2 className='pt-4'>Our Team</h2>
            <p className='text-center'>Meet Our Experienced Team Members</p>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="member">
                <div className="pic">
                  <img src="assets/img/Kuldeepji.png" className="img-fluid" alt="Mayank Verma" />
                </div>
                <div className="member-info mt-3">
                  <h4>Mayank Verma</h4>
                  <span>19+ years of experience in Telecommunication</span>
                  <div className="social mt-2">
                    <a href="#"><i className="icofont-twitter"></i></a>
                    <a href="#"><i className="icofont-facebook"></i></a>
                    <a href="#"><i className="icofont-instagram"></i></a>
                    <a href="#"><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="member">
                <div className="pic">
                  <img src="assets/img/santosh.jpeg" className="img-fluid" alt="Santosh Kumar Singh" />
                </div>
                <div className="member-info mt-3">
                  <h4>Santosh Kumar Singh</h4>
                  <span>9+ years experience in Renewable Energy, VLSI Design, and AI/ML</span>
                  <div className="social mt-2">
                    <a href="#"><i className="icofont-twitter"></i></a>
                    <a href="#"><i className="icofont-facebook"></i></a>
                    <a href="#"><i className="icofont-instagram"></i></a>
                    <a href="#"><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="member">
                <div className="pic">
                  <img src="assets/img/Kuldeepji.png" className="img-fluid" alt="Sandeep Malhotra" />
                </div>
                <div className="member-info mt-3">
                  <h4>Sandeep Malhotra</h4>
                  <span>6+ years experience in Hardware Design, Data Science, and AI</span>
                  <div className="social mt-2">
                    <a href="#"><i className="icofont-twitter"></i></a>
                    <a href="#"><i className="icofont-facebook"></i></a>
                    <a href="#"><i className="icofont-instagram"></i></a>
                    <a href="#"><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="member">
                <div className="pic">
                  <img src="assets/img/Kuldeepji.png" className="img-fluid" alt="Kuldeep Singh" />
                </div>
                <div className="member-info mt-3">
                  <h4>Kuldeep Singh</h4>
                  <span>10+ years experience in Data Engineering</span>
                  <div className="social mt-2">
                    <a href="#"><i className="icofont-twitter"></i></a>
                    <a href="#"><i className="icofont-facebook"></i></a>
                    <a href="#"><i className="icofont-instagram"></i></a>
                    <a href="#"><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about about-lists">
  <div class="container">
    <div class="row no-gutters">
    <div class="section-title text-center">
  <h2 className='pt-4'>Recognised Under</h2>
  <p className='text-center'>Our commitment to quality and innovation has been recognized across various industry standards and awards.</p>
</div>


      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <img src="/assets/img/msme.png" alt="MSME Logo" class="logo-img"/>
          <h4 className='px-2'>MSME</h4>
        </div>
        <p>Recognized under the Ministry of Micro, Small & Medium Enterprises, supporting the growth and development of businesses.</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <img src="/assets/img/StartUpIndia.jpeg" alt="Startup India Logo" class="logo-img"/>
          <h4 className='px-2'>Startup India</h4>
        </div>
        <p>Empowering startups with resources, mentorship, and funding to fuel the entrepreneurial ecosystem in India.</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <img src="/assets/img/MakeInIndia.jpeg" alt="Make in India Logo" class="logo-img"/>
          <h4 className='px-2'>Make in India</h4>
        </div>
        <p>Part of the 'Make in India' initiative, promoting innovation and investment to transform India into a global manufacturing hub.</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <img src="/assets/img/Gem.jpeg" alt="GeM OEM Logo" class="logo-img"/>
          <h4 className='px-2'>GeM as an OEM</h4>
        </div>
        <p>Registered as an Original Equipment Manufacturer (OEM) on the Government e-Marketplace, providing quality products and services.</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <img src="/assets/img/iso.jpeg" alt="ISO Logo" class="logo-img"/>
          <h4 className='px-2'>ISO Certified</h4>
        </div>
        <p>ISO certification ensures adherence to international standards of quality, safety, and efficiency in products and services.</p>
      </div>

      <div class="col-lg-4 col-md-6 content-item">
        <div class="logo-heading">
          <h4>NIT Uttarakhand & IIT Roorkee</h4>
        </div>
        <p>Collaborating with premier institutions like NIT Uttarakhand and IIT Roorkee to drive innovation, research, and development.</p>
      </div>
    </div>
  </div>
</section>



      <Footer />
    </>
  );
}

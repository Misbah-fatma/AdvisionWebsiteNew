import { textDecoration } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const backToTopBtn = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToTop(1000); // Change duration to 500 milliseconds for 2x speed
    });

    const scrollToTop = (duration) => {
      const scrollStep = -window.scrollY / (duration / 15); // Adjusted scroll step for 2x speed
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    };
  }, []);
  return (
    <>
<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6 footer-info">

          <h1>ADVISIONS</h1>
          <p>
            "We leverage data for actionable insights through AI-driven solutions, pioneering innovation towards a brighter future."
          </p>
          <div className="social-links mt-3">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
  <h4>Get In Touch</h4>
  <ul className="contact-info">
    <li>
      <i className="bx bx-map"></i> 27, STPI, Botanical Garden, Noida, India
    </li>
    <li>
      <i className="bx bx-phone"></i> +91 8810316395
    </li>
    <li>
      <i className="bx bx-phone"></i> +91 7078054645
    </li>
    <li>
      <i className="bx bx-envelope"></i> <a href="mailto:info@advisionslab.com">info@advisionslab.com</a>
    </li>
  </ul>
</div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Popular Link</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About US</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy Policy</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Term & Condition</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Robotic Automation</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Machine Learning</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Predictive Analysis</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Data Science</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Robot Technology</a></li>
          </ul>
        </div>



      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      Copyright © 2022 Advisions Research and Development Pvt Ltd. All Rights Reserved.
    </div>
  </div>
</footer>

      <a
        href="/"
        className="btn btn-primary back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

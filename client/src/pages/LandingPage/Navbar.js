import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChannelPartnerForm from "./ChannelPartner";
import "../../App.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdown

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const state = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const history = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth_token");
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const profileLink = userData?.role === "Admin" ? "/admin-dashboard" : "/profile";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <section id="topbar" className="d-none d-lg-block" style={{ backgroundColor: '#1c5c93' }}>
        <div className="container clearfix">
          <div className="contact-info float-left">
            <i className="icofont-envelope"></i>
            <a href="mailto:contact@example.com" style={{ color: '#fff' }}>info@advisionslab.com</a>
            <i className="icofont-phone"></i> <span className="text-white"> +91 8810316395 </span>
          </div>
          <div className="social-links float-right">
  <a href="#" className="upwork">
    {/* Upwork Icon using SVG */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.9 14.49L14.5 16l-2.4 1.1c-.28.14-.6.21-.9.21-.58 0-1.15-.22-1.58-.65-.86-.85-1.06-2.1-.58-3.16l2.7-6.12c.1-.22.32-.35.56-.35s.46.13.56.35l1.43 3.22c.13.28.42.48.74.48s.61-.2.74-.48l.55-1.24 1.43 3.22c.43 1.06.23 2.31-.58 3.16-.43.43-1 .65-1.58.65-.3 0-.62-.07-.9-.21l-.91-.42z"
        fill="#fff"
      />
    </svg>
  </a>
  <a href="#" className="linkedin">
    <i className="icofont-linkedin" style={{ color: '#fff' }}></i>
  </a>
  <a href="#" className="youtube">
    <i className="icofont-youtube" style={{ color: '#fff' }}></i>
  </a>
</div>


        </div>
      </section>

      <header id="header" className={`sticky ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="container">
          <div className="logo float-left">
            <img src="/logo10.png" alt="Logo" className="logo"/>
          </div>

          <nav className={`nav-menu float-right d-lg-block ${menuOpen ? 'd-block' : ''}`}>
            <ul>
              <li className="active">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="active">
                <Link to="/product" onClick={toggleMenu}>Products</Link>
              </li>
              <li className="active">
                <Link to="/services" onClick={toggleMenu}>Services</Link>
              </li>


              <li className="drop-down active">
                <a href="#" onClick={() => toggleDropdown(1)}>
                  Channel Partners
                </a>
                <ul className={activeDropdown === 1 ? 'active' : ''}>
                  <li>
                    <a href="#" onClick={handleShowModal}>Joining Form</a>
                  </li>
                  <li>
                    <Link to="/blogChannel" onClick={toggleMenu}>National Partners</Link>
                  </li>
                  <li>
                    <Link to="/blogChannelInternational" onClick={toggleMenu}>International Partners</Link>
                  </li>
                </ul>
              </li>


              <li className="drop-down active">
                <a href="#" onClick={() => toggleDropdown(2)}>
                  Details
                </a>
                  <ul className={activeDropdown === 2 ? 'active' : ''}>
                    <li>
                      <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={toggleMenu}>About</Link>
                    </li>
                  </ul>
              </li>


              <li className="drop-down active">
                {userData ? (
                  <>
                    <a href="#" onClick={() => toggleDropdown(3)}>
                      <i className="fas fa-user-circle m-1"></i>
                      {userData.userName}
                    </a>
                     <ul className={activeDropdown === 3 ? 'active' : ''}>
                        <li>
                          <Link to={profileLink} onClick={toggleMenu}>Profile</Link>
                        </li>
                        <li>
                          <a onClick={handleLogout}>Logout</a>
                        </li>
                      </ul>
                  </>
                ) : (
                  <Link to="/login" onClick={toggleMenu}>Login</Link>
                )}
              </li>
            </ul>
          </nav>

          <button className="mobile-nav-toggle d-lg-none" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog" style={{ maxWidth: "900px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Channel Partner Form</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <ChannelPartnerForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

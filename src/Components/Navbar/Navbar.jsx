import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-danger sticky-top p-0">
      <Link
        to={"/"}
        className="navbar-brand bg-danger d-flex align-items-center px-4 px-lg-5">
        <h2 className="mb-2 text-white">LOGO</h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Service
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown">
              Pages
            </a>
            <div class="dropdown-menu fade-up m-0">
              <Link to="#" className="dropdown-item">
                Pricing Plan
              </Link>
              <Link to="#" className="dropdown-item">
                Features
              </Link>
              <Link to="#" className="dropdown-item">
                Free Quote
              </Link>
              <Link to="#" className="dropdown-item">
                Our Team
              </Link>
              <Link to="#" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="#" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        <h4 className="m-0 pe-lg-5 d-none d-lg-block">
          <i className="fa fa-headphones me-3"></i>+012 345 6789
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;

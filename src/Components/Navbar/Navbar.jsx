import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.scss";
import { Waypoint } from "react-waypoint";

function Navbar() {
  const [animate, setAnimate] = React.useState(false);

  function handleWaypointEnter() {
    setAnimate(false);
  }

  function handleWaypointLeave() {
    setAnimate(true);
  }

  return (
    <>
      <Waypoint
        fireOnRapidScroll={false}
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
        topOffset="-719px"
        bottomOffset="-719px"
      />

      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-danger  p-0 ${
          animate
            ? "fixed-top animate__animated animate__slideInDown "
            : "sticky-top animate__slower"
        }`}>
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
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/shoppingpage" className="nav-item nav-link">
              Market Place
            </NavLink>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Services
              </a>
              <div class="dropdown-menu fade-up m-0">
                <Link to="#" className="dropdown-item">
                  Computer Repairs
                </Link>
                <Link to="#" className="dropdown-item">
                  Software Installation
                </Link>
                <Link to="#" className="dropdown-item">
                  Web & App Development
                </Link>
                <Link to="#" className="dropdown-item">
                  Others
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
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
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact us
            </NavLink>
          </div>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block">
            <i className="fa fa-headphones me-3"></i>+012 345 6789
          </h4>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

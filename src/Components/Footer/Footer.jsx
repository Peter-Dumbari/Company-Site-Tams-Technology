import React from "react";
import "../Footer/Footer.scss";
import Input, { GroupInputs } from "../../Components/InputComponent/Input";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_container">
      <div className="row">
        <div className="col col-xl-3 col-lg-3 col-md-4 col-sm-12">
          <h4>Address</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3"></i>No. 5 Agbunabali Road,
            PH, RS
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3"></i>+012 345 127890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3"></i>company@mail.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="col col-xl-3 col-lg-3 col-md-4 col-sm-12 ">
          <h4>Service</h4>
          <div className="link">
            <Link class="btn btn-link" href="">
              About Us
            </Link>
          </div>
          <div className="link">
            <Link class="btn btn-link" href="">
              Our Services
            </Link>
          </div>
          <div className="link">
            <Link class="btn btn-link" href="">
              Logistic Solutions
            </Link>
          </div>
        </div>
        <div className="col col-xl-3 col-lg-3 col-md-4 col-sm-12">
          <h4>Quick Links</h4>
          <div className="link">
            <Link class="btn btn-link" href="">
              Contact Us
            </Link>
          </div>
          <div className="link">
            <Link class="btn btn-link" href="">
              Sea Freight
            </Link>
          </div>
          <div className="link">
            <Link class="btn btn-link" href="">
              Industry solutions
            </Link>
          </div>
        </div>
        <div className="col col-xl-3 col-lg-3 col-md-4 col-sm-12 ">
          <h4>Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div>
            <GroupInputs
              btntitle={"SignUp"}
              inputplaceholder={"Your email"}
              inputtype={"email"}
              required={true}
              btntype={"footer_btn_danger"}
            />
          </div>
        </div>
      </div>
      <div className="footer_footer_container">
        <hr />
        <div className="copyright">
          <div className="row">
            <div className="col-md-12 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom bottomwebsitelink" href="#">
                wwww.tamstechnology.com
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-12 text-center text-md-end">
              Designed By{" "}
              <a
                className="border-bottom myportfoliolink"
                href="https://peterdumbari.netlify.app">
                ZoePeeSoft
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

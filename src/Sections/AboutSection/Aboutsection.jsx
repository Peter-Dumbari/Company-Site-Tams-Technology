import React from "react";
import "../AboutSection/Aboutsection.scss";
import image from "../../Assets/Images/sharpdeliveryimage.jpeg";
import Button from "../../Components/ButtonComponents/Button";

function Aboutsection() {
  return (
    <div className="row aboutsectio_container">
      <div className="col-6 image_container">
        <img src={image} alt="techguy" className="image" />
      </div>
      <div className="col-6 about-items">
        <h6 className="text-uppercase mb-3">About Us</h6>
        <h1>Quick and Need Delivery of Jobs</h1>
        <p className="mb-5">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="row g-4 mb-5">
          <div className="col-sm-6">
            <i className="fa fa-globe fa-3x  mb-3 icon"></i>
            <h5>Global Coverage</h5>
            <p className="m-0">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
              diam justo.
            </p>
          </div>
          <div className="col-sm-6">
            <i className="fa fa-shipping-fast fa-3x  mb-3 icon"></i>
            <h5>On Time Delivery</h5>
            <p className="m-0">
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
              diam justo.
            </p>
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <Button title={"Explore More"} type={"danger"} />
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;

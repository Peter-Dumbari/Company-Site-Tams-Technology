import React from "react";
import "../OurFeatures/Ourfeature.scss";
import image from "../../Assets/Images/circuit-board.jpg";
import { Waypoint } from "react-waypoint";

function Ourfeature() {
  const [animate, setAnimate] = React.useState(false);
  function handleWaypointEnter() {
    console.log("Waypoint entered aboutsection");
    setAnimate(true);
  }

  function handleWaypointLeave() {
    console.log("Waypoint left aboutsection");
  }
  return (
    <Waypoint
      fireOnRapidScroll={false}
      onEnter={handleWaypointEnter}
      onLeave={handleWaypointLeave}
      topOffset="700.8828125px"
      bottomOffset="1110.671875px">
      <div className="row feature_container">
        <div className="col-6 feature_text">
          <div
            className={`text_container ${
              animate && "animate__animated animate__slideInLeft"
            }`}>
            <h6 className="text-uppercase mb-3">Our Features</h6>
            <h1 className="mb-5">We Are Trusted Computer dealer Since 2012</h1>
            <div className="d-flex mb-5">
              <i className="fa fa-globe icon fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>Worldwide Service</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
            <div className="d-flex mb-5">
              <i className="fa fa-shipping-fast icon fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>On Time Delivery</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
            <div className="d-flex mb-0">
              <i className="fa fa-headphones icon fa-3x flex-shrink-0"></i>
              <div className="ms-4">
                <h5>24/7 Telephone Support</h5>
                <p className="mb-0">
                  Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                  sit clita duo justo magna erat amet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-6 feature_image ${
            animate && "animate__animated animate__slideInRight"
          }`}>
          <img className="featureimage" src={image} alt="" />
        </div>
      </div>
    </Waypoint>
  );
}

export default Ourfeature;

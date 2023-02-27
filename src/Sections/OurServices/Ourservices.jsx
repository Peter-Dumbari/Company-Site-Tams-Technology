import React from "react";
import Ourservicecard from "../../Components/OurserviceCard/Ourservicecard";
import "../OurServices/Ourservices.scss";
import image1 from "../../Assets/Images/service-1.jpg";
import image2 from "../../Assets/Images/service-2.jpg";
import image3 from "../../Assets/Images/service-3.jpg";
import { Waypoint } from "react-waypoint";

function Ourservices() {
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
      topOffset="716.6015625px"
      bottomOffset="1751.78125px">
      <div className="ourservice_container">
        <div
          className={`header_text ${
            animate && "animate__animated animate__slideInUp"
          }`}>
          <h6 className="text-uppercase">Our Services</h6>
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row">
          <div className="col col-md-4">
            <Ourservicecard
              title={"Air Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image1}
              btntext="Read More"
              delay={"animate__faster"}
            />
          </div>
          <div className="col col-md-4">
            <Ourservicecard
              title={"Ocean Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image2}
              btntext="Read More"
              delay={"animate__fast"}
            />
          </div>
          <div className="col col-md-4">
            <Ourservicecard
              title={"Road Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image3}
              btntext="Read More"
            />
          </div>
          <div className="col col-md-4">
            <Ourservicecard
              title={"Air Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image1}
              btntext="Read More"
              delay={"animate__faster"}
            />
          </div>
          <div className="col col-md-4">
            <Ourservicecard
              title={"Ocean Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image2}
              btntext="Read More"
              delay={"animate__fast"}
            />
          </div>
          <div className="col col-md-4">
            <Ourservicecard
              title={"Road Freight"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
              }
              image={image3}
              btntext="Read More"
            />
          </div>
        </div>
      </div>
    </Waypoint>
  );
}

export default Ourservices;

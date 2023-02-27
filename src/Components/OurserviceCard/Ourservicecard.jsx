import React from "react";
import "../OurserviceCard/Ourservicecard.scss";
import Slidingbutton from "../SlidingButton/Slidingbutton";
import { Waypoint } from "react-waypoint";

function Ourservicecard({ title, image, text, btntext, delay }) {
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
      <div
        className={`ourservice_card ${
          animate && `animate__animated animate__fadeInUp ${delay}`
        }`}>
        <div className="overflow-hidden">
          <img src={image} alt="card_image" className="ourservice_card_image" />
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
        <Slidingbutton buttonText={btntext} />
      </div>
    </Waypoint>
  );
}

export default Ourservicecard;

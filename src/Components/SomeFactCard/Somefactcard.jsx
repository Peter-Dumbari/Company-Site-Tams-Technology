import React from "react";
import { Waypoint } from "react-waypoint";
import "../SomeFactCard/Somefactcard.scss";

function Somfactcard({ icon, number, text, type }) {
  const [animate, setAnimate] = React.useState(false);

  function handleWaypointEnter() {
    setAnimate(true);
  }

  function handleWaypointLeave() {}
  return (
    <Waypoint
      fireOnRapidScroll={false}
      onEnter={handleWaypointEnter}
      onLeave={handleWaypointLeave}
      topOffset="800.8828125px"
      bottomOffset="1110.671875px">
      <div
        className={`card ${type} ${
          animate && "animate__animated animate__fadeIn animate__delay-1s"
        }`}>
        <div className="icon_container">
          <i className={`${icon} icon`}></i>
        </div>
        <div className="number">{number}</div>
        <h6>{text}</h6>
      </div>
    </Waypoint>
  );
}

export default Somfactcard;

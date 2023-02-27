import React from "react";
import "../OurTeamSection/Ourteamsec.scss";
import Card from "../../Components/FancyCard/Card";
import image1 from "../../Assets/Images/team-1.jpg";
import image2 from "../../Assets/Images/team-2.jpg";
import image3 from "../../Assets/Images/team-3.jpg";
import image4 from "../../Assets/Images/team-4.jpg";
import { Waypoint } from "react-waypoint";

function Ourteamsec() {
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
      <div className="ourteam_container">
        <div
          className={`header_section ${
            animate && "animate__animated animate__slideInUp"
          }`}>
          <h6 className="text-uppercase mb-3">Our Team</h6>
          <h1 className="mb-5">Expert Team Members</h1>
        </div>

        <div className="row">
          <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Card
              title={"James LLoyd"}
              any="HR Africa"
              image={image1}
              delay={"animate__faster"}
            />
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Card
              title={"Krain Jean"}
              any="General Supervisor"
              image={image2}
              delay={"animate__fast"}
            />
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Card title={"Jay Scoot"} any="Assistant GS" image={image3} />
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Card
              title={"Zoe Pee"}
              any="Software Engineering"
              image={image4}
              delay={"animate__slow"}
            />
          </div>
        </div>
      </div>
    </Waypoint>
  );
}

export default Ourteamsec;

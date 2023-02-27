import React from "react";
import { Waypoint } from "react-waypoint";
import Pricecard from "../../Components/PriceCard/Pricecard";
import "../PricingPlan/Pricingplan.scss";

function Pricingplan() {
  const firstCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];
  const secondCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];
  const thirdCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];

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
      <div className="pricingplan_container">
        <div
          className={`header_part ${
            animate && "animate__animated animate__slideInUp"
          }`}>
          <h6 className="text-uppercase">Pricing Plan</h6>
          <h1 className="mb-5">Perfect Pricing Plan</h1>
        </div>
        <div className="row">
          <div className="col col-md-4 col-sm-12">
            <Pricecard
              items={firstCarditems}
              pricename="Basic Plan"
              amount={"490.0"}
              delay={"animate__faster"}
            />
          </div>
          <div className="col col-md-4 col-sm-12">
            <Pricecard
              items={secondCarditems}
              pricename="Standard Plan"
              amount={"990.0"}
              delay={"animate__fast"}
            />
          </div>
          <div className="col col-md-4 col-sm-12">
            <Pricecard
              items={thirdCarditems}
              pricename="Advance Plan"
              amount={"1000.0"}
            />
          </div>
        </div>
      </div>
    </Waypoint>
  );
}

export default Pricingplan;

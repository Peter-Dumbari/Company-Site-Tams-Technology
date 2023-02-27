import React from "react";
import "../PriceCard/Pricecard.scss";
import Slidingbutton from "../../Components/SlidingButton/Slidingbutton";
import { Waypoint } from "react-waypoint";

function Pricecard({ items, pricename, amount, delay }) {
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
        className={`price_container ${
          animate && `animate__animated animate__fadeInUp ${delay}`
        }`}>
        <div className="head">
          <div className="header_container">
            <h5 className="price_name mb-1">{pricename}</h5>
            <h1 class="display-5 mb-0">
              <small className="align-top smalldollar">$</small>
              {amount}
              <small className="align-bottom month">/ Month</small>
            </h1>
          </div>
        </div>

        <hr className="line" />
        <div className="card_body">
          {items &&
            items.map(({ id, item }) => (
              <div className="item_list" key={id}>
                <i className="fa fa-check text-success me-3 icon"></i>
                <span>{item}</span>
              </div>
            ))}
          <Slidingbutton buttonText={"Order Now"} />
        </div>
      </div>
    </Waypoint>
  );
}

export default Pricecard;

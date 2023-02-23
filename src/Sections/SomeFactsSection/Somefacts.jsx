import React from "react";
import Somfactcard from "../../Components/SomeFactCard/Somefactcard";
import "../SomeFactsSection/Somefacts.scss";

function Somefacts() {
  return (
    <div className="row somfactsContainer">
      <div className="col-6 first_column">
        <h6 className="text-uppercase mb-3">Some Facts</h6>
        <h1 className="mb-5">#1 Place To Manage All Of Your Computer Deals</h1>
        <p className="mb-5">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="d-flex align-items-center icon_box">
          <i className="fa fa-headphones fa-2x flex-shrink-0 p-3 icon"></i>
          <div className="ps-4">
            <h6 className="text-dark">Call for any query!</h6>
            <h3 className="m-0">+012 345 6789</h3>
          </div>
        </div>
      </div>
      <div className="col-6 second_column">
        <div className="row">
          <div className="col first_row">
            <div className="first_row_first">
              <Somfactcard
                icon={"fa fa-users"}
                number="1234"
                text="Happy Clients"
                type={"danger_card"}
              />
            </div>
            <div className="first_row_second">
              <Somfactcard
                icon={"fa fa-ship"}
                number="1234"
                text="Sharp Deliveries"
                type={"primary_card"}
              />
            </div>
          </div>
          <div className="col-6 secondcolumn">
            <Somfactcard
              icon={"fa-solid fa-star"}
              number="1234"
              text={"Customer Review"}
              type={"success_card"}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Somefacts;

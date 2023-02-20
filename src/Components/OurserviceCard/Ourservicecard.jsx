import React from "react";
import "../OurserviceCard/Ourservicecard.scss";
import Slidingbutton from "../SlidingButton/Slidingbutton";

function Ourservicecard({ title, image, text }) {
  return (
    <div className="ourservice_card">
      <div className="overflow-hidden">
        <img src={image} alt="card_image" className="ourservice_card_image" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
      <Slidingbutton buttonText={"Read More"} />
    </div>
  );
}

export default Ourservicecard;
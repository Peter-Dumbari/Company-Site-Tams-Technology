import React from "react";
import Slidingbutton, {
  Slidingmediabutton,
} from "../SlidingButton/Slidingbutton";
import "../FancyCard/Card.scss";

export default function Card({ title, image, text, btntext, any }) {
  return (
    <div className="cardy">
      <div className="overflow-hidden">
        <img src={image} alt="card_image" className="ourservice_card_image" />
      </div>
      <h4>{title}</h4>
      <span className="anytext">{any}</span>
      <p>{text}</p>

      <Slidingmediabutton />
    </div>
  );
}

export function Testimonycard({
  clientname,
  clientprofession,
  clientmessage,
  image,
}) {
  return (
    <div className="tesmonicard  position-relative">
      <div className="testimonial-item p-4 my-5">
        <div className="d-flex align-items-end mb-4">
          {image && (
            <img className="img-fluid flex-shrink-0 image" src={image} />
          )}
          <div className="ms-4">
            <h5 className="mb-1">{clientname}</h5>
            <p className="m-0">{clientprofession}</p>
          </div>
        </div>
        <p className="mb-0">{clientmessage}</p>
      </div>
      <i className="fa fa-quote-right fa-3x qoute_icon"></i>
    </div>
  );
}

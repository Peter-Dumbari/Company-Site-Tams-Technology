import React from "react";
import { Link } from "react-router-dom";
import "../SimpleCard/Simplecard.scss";

export default function Simplecard({ item_image, item_name, link, bg }) {
  return (
    <Link to={link} className="container_link">
      <div className={`simplecard_container`}>
        <img
          src={item_image}
          alt="item_image"
          className={`simpleimage ${bg}`}
        />
        <h3>{item_name}</h3>
      </div>
    </Link>
  );
}

export function Minicard({ icon, title, description }) {
  return (
    <Link className="container_link">
      <div className="d-flex align-items-center minicard_container">
        <div className="icon_container">
          <div className="icon">{icon}</div>
        </div>
        <div className="ps-4">
          <h3 className="feature_title">{title}</h3>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </Link>
  );
}

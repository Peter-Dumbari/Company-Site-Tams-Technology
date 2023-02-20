import React from "react";
import "../SomeFactCard/Somefactcard.scss";

function Somfactcard({ icon, number, text, type }) {
  return (
    <div className={`card ${type}`}>
      <div className="icon_container">
        <i className={`${icon} icon`}></i>
      </div>
      <div className="number">{number}</div>
      <h6>{text}</h6>
    </div>
  );
}

export default Somfactcard;

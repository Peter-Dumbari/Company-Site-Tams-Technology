import React from "react";
import "../SlidingButton/Slidingbutton.scss";
import { Link } from "react-router-dom";

function Slidingbutton({ pagelink, buttonText }) {
  return (
    <Link to={pagelink} className="linkwrapper">
      <div className="arrow_container overflow-hidden">
        <i className="fa fa-arrow-right icon"></i>
        <div className="read_more_box">{buttonText}</div>
      </div>
    </Link>
  );
}

export default Slidingbutton;

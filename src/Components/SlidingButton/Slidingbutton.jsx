import React from "react";
import "../SlidingButton/Slidingbutton.scss";
import { Link } from "react-router-dom";

export default function Slidingbutton({ pagelink, buttonText }) {
  return (
    <Link to={pagelink} className="linkwrapper">
      <div className="arrow_container overflow-hidden">
        <i className="fa fa-arrow-right icon"></i>
        <div className="read_more_box">{buttonText}</div>
      </div>
    </Link>
  );
}

export function Slidingmediabutton({ buttonText }) {
  return (
    <div className="arrow_container overflow-hidden">
      <i className="fa fa-share icon_share"></i>

      <div className="media_icons_container">
        <span className="span">
          <a href="">
            <i class="fab fa-facebook-f mediaicon"></i>
          </a>
          <a href="">
            <i class="fab fa-twitter mediaicon"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram mediaicon"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

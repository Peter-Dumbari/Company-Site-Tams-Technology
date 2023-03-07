import React from "react";
import "./Pageheader.scss";

function Pageheader({ text }) {
  return (
    <div className="pageheader_container">
      <h3>{text}</h3>
    </div>
  );
}

export default Pageheader;

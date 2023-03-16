import React from "react";
import "../ButtonComponents/Button.scss";

export default function Button({ title, type, onclick, icon }) {
  return (
    <button onClick={onclick} className={`default ${type}`}>
      <div className="d-flex">
        {title}
        {icon && <div className="icon_container">{icon}</div>}
      </div>
    </button>
  );
}

export function Footerbtn({ type, title, onclick }) {
  return (
    <button onClick={onclick} className={`w-100 ${type}`}>
      {title}
    </button>
  );
}

export function TooltipButton({ tooltipMessage, type, icon }) {
  return (
    <button className={`tooltipbtn ${type}`}>
      {icon} <span className="tooltipmessage">{tooltipMessage}</span>
    </button>
  );
}

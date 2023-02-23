import React from "react";
import "../ButtonComponents/Button.scss";

export default function Button({ title, type, onclick }) {
  return (
    <button onClick={onclick} className={`default ${type}`}>
      {title}
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

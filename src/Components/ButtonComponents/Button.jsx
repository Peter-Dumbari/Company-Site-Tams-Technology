import React from 'react';
import "../ButtonComponents/Button.scss";


function Button({title, type, onclick}) {
  return (
    <button onClick={onclick} className={`default ${type}`}>
        {title}
    </button>
  )
}

export default Button
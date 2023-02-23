import React from "react";
import BackToTop from "react-back-to-top-button";
import "../BacktotopComponent/Backtotop.scss";

function Backtotop() {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutSine">
      <i className="fa-solid fa-chevron-up icon"></i>
    </BackToTop>
  );
}

export default Backtotop;

import React from "react";
import "../ShopHerosection/Shophero.scss";
import Button from "../../Components/ButtonComponents/Button";
import image from "../../Assets/Images/macbookpro.png";

function Shophero() {
  return (
    <div className="row shophero_container">
      <div className="col first_column">
        <div className="shopheader_text">
          <h6>
            Best Macbook Computers and <br /> Acessories Online Shop
          </h6>
          <h3>Smart and Neat Computers</h3>
          <div className="btn_container">
            <Button
              title={"SHOP NOW"}
              type={"danger"}
              icon={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.999969 7H13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path
                    d="M6.99997 1L13 7L6.99997 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div className="col second_column">
        <div class="slider__thumb-13 text-end mr-40">
          <span class="slider__thumb-13-circle-1"></span>
          <span class="slider__thumb-13-circle-2"></span>
          <img
            alt="slider img"
            src={image}
            width="460"
            height="525"
            decoding="async"
            data-nimg="1"
          />
        </div>
      </div>
    </div>
  );
}

export default Shophero;

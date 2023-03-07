import React from "react";
import "../CouponCard/Couponcard.scss";

function Couponcard({ image, title, offnumber, monthandday, status }) {
  return (
    <div className="couponcard_container row">
      <span className="divider"></span>
      <div className="col-8 first_column">
        <div className="product_coupon_thumb_container">
          <img
            src={image}
            alt="product_coupon_thumb"
            className="coupon_thumb"
          />
        </div>
        <div className="product_coupon_content">
          <h3 className="product_coupon_title">{title}</h3>
          <p className="product_coupon_offer">
            <span>{offnumber}%</span>
            Off
          </p>

          <div className="product_coupon_countdown">
            <div className="product_coupon_inner_container">
              <ul>
                <li>
                  <div>151</div>
                  <div>Day</div>
                </li>
                <li>
                  <div>7</div>
                  <div>Hrs</div>
                </li>
                <li>
                  <div>52</div>
                  <div>Min</div>
                </li>
                <li>
                  <div>67</div>
                  <div>Sec</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 second_column">
        <div>
          <div className="d-flex">
            <div className="inneritems">
              Coupon{" "}
              <span className={status ? "green" : "red"}>
                {status ? "Active" : "Inactive"}
              </span>
              <div className="coupon_more_detail">
                <svg
                  className="icon"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1.5C4.99594 1.5 1.75 4.74594 1.75 8.75C1.75 12.7541 4.99594 16 9 16C13.0041 16 16.25 12.7541 16.25 8.75C16.25 4.74594 13.0041 1.5 9 1.5ZM0.25 8.75C0.25 3.91751 4.16751 0 9 0C13.8325 0 17.75 3.91751 17.75 8.75C17.75 13.5825 13.8325 17.5 9 17.5C4.16751 17.5 0.25 13.5825 0.25 8.75ZM9 7.75C9.55229 7.75 10 8.19771 10 8.75V11.95C10 12.5023 9.55229 12.95 9 12.95C8.44771 12.95 8 12.5023 8 11.95V8.75C8 8.19771 8.44771 7.75 9 7.75ZM9 4.5498C8.44771 4.5498 8 4.99752 8 5.5498C8 6.10209 8.44771 6.5498 9 6.5498H9.008C9.56028 6.5498 10.008 6.10209 10.008 5.5498C10.008 4.99752 9.56028 4.5498 9.008 4.5498H9Z"
                    fill="currentColor"></path>
                </svg>

                <div className="coupon_tooltip_container">
                  <p>
                    *This offer is only available on mega purchase, buy more to
                    claim it
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container_date_of_promo">
            <span className="date_of_promo">{monthandday}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couponcard;

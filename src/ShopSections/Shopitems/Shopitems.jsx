import React from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import "../Shopitems/Shopitems.scss";
import image from "../../Assets/Images/macbook2012.png";
import Lastedproduction from "../Shopitemdata/Lastedproduction";
import Bestselling from "../Shopitemdata/Bestselling";
import Toprated from "../Shopitemdata/Toprated";
import Pageheader from "../../ShopComponents/Pageheader/Pageheader";

function Shopitems() {
  return (
    <div className="shopitems_container">
      <div className="row shopitems_header_container">
        <div className="col first_column">
          <Pageheader text={"Products Available"} />
        </div>
        <div className="col second_column">
          <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                aria-current="page"
                data-bs-taid="top_rated_tap"
                data-bs-toggle="tab"
                data-bs-target="#top_rated"
                type="button"
                role="tab"
                aria-controls="top_rated"
                aria-selected="true">
                Top Rated
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-target="#best_selling"
                aria-current="page"
                data-bs-taid="best_selling_tap"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-controls="best_selling"
                aria-selected="true">
                Best Selling
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                aria-current="page"
                data-bs-taid="latest_production_tab"
                data-bs-toggle="tab"
                data-bs-target="#latest_production"
                type="button"
                role="tab"
                aria-controls="latest_production"
                aria-selected="true">
                Lastest Production
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content shopitems_items" id="myTabContent">
        <div
          className="tab-item  fade show active"
          id="top_rated"
          role="tabpanel"
          aria-labelledby="top_rated"
          tabIndex="0">
          <Toprated />
        </div>
        <div
          className="tab-item fade items "
          id="best_selling"
          role="tabpanel"
          aria-labelledby="best_selling"
          tabIndex="0">
          <Bestselling />
        </div>
        <div
          className="tab-item fade items"
          id="latest_production"
          role="tabpanel"
          aria-labelledby="latest_production"
          tabIndex="0">
          <Lastedproduction />
        </div>
      </div>
    </div>
  );
}

export default Shopitems;

import React from "react";
import Pricecard from "../../Components/PriceCard/Pricecard";
import "../PricingPlan/Pricingplan.scss";

function Pricingplan() {
  const firstCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];
  const secondCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];
  const thirdCarditems = [
    { id: 0, item: "HTML5 & CSS3" },
    { id: 1, item: "Bootstrap v5" },
    { id: 2, item: "FontAwesome Icons" },
    { id: 3, item: "Responsive Layout" },
    { id: 4, item: "Cross-browser Support" },
  ];

  return (
    <div className="pricingplan_container">
      <div className="header_part">
        <h6 className="text-uppercase">Pricing Plan</h6>
        <h1 className="mb-5">Perfect Pricing Plan</h1>
      </div>
      <div className="row">
        <div className="col col-md-4 col-sm-12">
          <Pricecard
            items={firstCarditems}
            pricename="Basic Plan"
            amount={"490.0"}
          />
        </div>
        <div className="col col-md-4 col-sm-12">
          <Pricecard
            items={secondCarditems}
            pricename="Standard Plan"
            amount={"990.0"}
          />
        </div>
        <div className="col col-md-4 col-sm-12">
          <Pricecard
            items={thirdCarditems}
            pricename="Advance Plan"
            amount={"1000.0"}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricingplan;

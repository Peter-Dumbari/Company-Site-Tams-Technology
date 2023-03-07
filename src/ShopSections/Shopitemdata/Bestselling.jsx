import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";

function Bestselling() {
  const { Toprateditems } = useContext(GlobalContext);
  return (
    <div className="row bestselling_container">
      {Toprateditems &&
        Toprateditems.map((item) => (
          <div className="col-4" key={item.id}>
            <Animatedcard
              cardimage={item.image}
              cardname={item.name}
              carddiscount={item.discount}
              oldprice={item.oldprice}
              newprice={item.newprice}
            />
          </div>
        ))}
    </div>
  );
}

export default Bestselling;

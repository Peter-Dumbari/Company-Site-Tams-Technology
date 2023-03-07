import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";
function Toprated() {
  const { Toprateditems } = useContext(GlobalContext);

  return (
    <div className="row toprated_container">
      {Toprateditems &&
        Toprateditems.map(
          ({ id, image, name, discount, oldprice, newprice, promo, link }) => (
            <div className="col-4" key={id}>
              <Animatedcard
                cardimage={image}
                cardname={name}
                carddiscount={discount}
                oldprice={oldprice}
                newprice={newprice}
                sale={promo}
                link={link}
                id={id}
              />
            </div>
          )
        )}
    </div>
  );
}

export default Toprated;

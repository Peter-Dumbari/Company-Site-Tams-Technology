import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";
function Toprated() {
  const {
    items: { items },
  } = useContext(GlobalContext);

  return (
    <div className="row toprated_container">
      {items &&
        items.map(
          ({
            id,
            image,
            name,
            discount,
            oldprice,
            newprice,
            promo,
            link,
            Quantity,
            quantity,
            addedtocart,
            newPrice,
          }) => (
            <div className="col-3" key={id}>
              <Animatedcard
                cardimage={image}
                cardname={name}
                carddiscount={discount}
                oldprice={oldprice}
                newprice={newprice}
                sale={promo}
                link={link}
                id={id}
                addedtocart={addedtocart}
                Quantity={Quantity}
                quantity={quantity}
                newPrice={newPrice}
              />
            </div>
          )
        )}
    </div>
  );
}

export default Toprated;

import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import image from "../../Assets/Images/ipadmini.png";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";

function Lastedproduction() {
  const {
    items: { items },
  } = useContext(GlobalContext);
  return (
    <div className="lastedproduction row">
      {items &&
        items.map((data) => (
          <div className="col-3" key={data.id}>
            <Animatedcard
              carddiscount={data.discount}
              cardname={data.name}
              cardimage={data.image}
              oldprice={data.oldprice}
              newprice={data.newprice}
              sale={data.promo}
              link={data.link}
              id={data.id}
              addedtocart={data.addedtocart}
              Quantity={items.quantity}
              quantity={items.quantity}
              newPrice={items.newPrice}
            />
          </div>
        ))}
    </div>
  );
}

export default Lastedproduction;

import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";

function Bestselling() {
  const {
    items: { items },
  } = useContext(GlobalContext);
  return (
    <div className="row bestselling_container">
      {items &&
        items.map((item) => (
          <div className="col-3" key={item.id}>
            <Animatedcard
              cardimage={item.image}
              cardname={item.name}
              carddiscount={item.discount}
              oldprice={item.oldprice}
              newprice={item.newprice}
              link={item.link}
              id={item.id}
              Quantity={items.quantiy}
              quantity={items.quantity}
              newPrice={item.newPrice}
            />
          </div>
        ))}
    </div>
  );
}

export default Bestselling;

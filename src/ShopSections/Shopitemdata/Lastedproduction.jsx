import React, { useContext } from "react";
import Animatedcard from "../../ShopComponents/AnimatedCard/Animatedcard";
import image from "../../Assets/Images/ipadmini.png";
import "./Generalstyles.scss";
import { GlobalContext } from "../../Shopcontext/Provider";

function Lastedproduction() {
  const { Toprateditems } = useContext(GlobalContext);
  console.log("Toprateditems", Toprateditems);
  return (
    <div className="lastedproduction row">
      {Toprateditems &&
        Toprateditems.map(
          (data) => (
            <div className="col-4" key={data.id}>
              <Animatedcard
                carddiscount={data.discount}
                cardname={data.name}
                cardimage={data.image}
                oldprice={data.oldprice}
                newprice={data.newprice}
                sale={data.promo}
              />
            </div>
          )

          // (id, image, discount, name, oldprice, newprice, promo) => (

          // )
        )}
    </div>
  );
}

export default Lastedproduction;

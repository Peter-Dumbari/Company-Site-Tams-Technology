import React, { useContext } from "react";
import "../CartItems/Cartitems.scss";
import { GlobalContext } from "../../Shopcontext/Provider";
import { Removefromchart } from "../../Shopcontext/Actions/auth/Removefromcart";
import emptyimage from "../../Assets/Images/empty-cart.webp";
import Button from "../../Components/ButtonComponents/Button";
import { Link } from "react-router-dom";

function Cartitems() {
  const {
    items: { cartitems, totalPrice },
    authDispatch,
  } = useContext(GlobalContext);

  console.log("cartitems", cartitems);
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <div className="cartmini__top p-relative d-flex">
          <div className="cartmini__title">
            <h4>Shopping cart</h4>
          </div>
          <div className="cartmini__close">
            <button
              type="button"
              className="cartmini-close-btn"
              data-bs-dismiss="offcanvas"
              aria-label="close">
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
      {cartitems.length > 0 ? (
        cartitems.map((items) => (
          <Link to={`/item_detail/ ${items.id}`} className="cartitem_link">
            <div className="chatitems_container" key={items.id}>
              <div className="chaitem">
                <div className="row">
                  <div className="col-3 chartitem-img-container">
                    <img src={items.image} alt="" className="image purplebg" />
                  </div>
                  <div className="col-8 chatitem-detail">
                    <h5>{items.name}</h5>
                    <span className="amount">${items.newprice}</span>
                    <span className="quantities">
                      x<span>{items.quantity}</span>
                    </span>
                  </div>
                </div>
                <hr />
              </div>

              <div
                className="delete_button"
                onClick={() => Removefromchart(items)(authDispatch)}>
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="empty_image_container">
          <img src={emptyimage} alt="emptyimage" className="emptyimage" />
          <span className="text">Your Cart is Empty</span>
          <div className="button_container">
            <Button title={"Go To Shop"} type={"primary"} />
          </div>
        </div>
      )}
      <div
        className={`total_price_container ${
          cartitems.length > 0 && "margintop"
        }`}>
        <hr />
        <div className="total_price_inner">
          <div className="d-flex subtotal_box">
            <h6 className="subtotal_text">Subtotal:</h6>
            <h6 className="subtotal_number">${totalPrice}.00</h6>
          </div>

          <div className="price_button_container">
            <div className="button-one">
              <Button title={"View Cart"} />
            </div>
            <div className="button-two">
              <Button title={"Checkout"} type={"light-outline"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;

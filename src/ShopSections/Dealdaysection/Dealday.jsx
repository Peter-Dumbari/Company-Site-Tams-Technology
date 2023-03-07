import React from "react";
import Couponcard from "../../ShopComponents/CouponCard/Couponcard";
import image from "../../Assets/Images/macbookpro.png";
import "../Dealdaysection/Dealday.scss";
import Button from "../../Components/ButtonComponents/Button";
import image2 from "../../Assets/Images/ipadmini.png";
import image3 from "../../Assets/Images/macbook2012.png";
import image4 from "../../Assets/Images/macbookcharger.png";
import Pageheader from "../../ShopComponents/Pageheader/Pageheader";

function Dealday() {
  const datas = [
    {
      id: 0,
      image: image,
      title: "Friday Promo",
      date: "June 12",
      status: false,
    },
    {
      id: 1,
      image: image2,
      title: "Black Friday",
      date: "February 28",
      status: true,
    },
    {
      id: 1,
      image: image3,
      title: "Black Friday",
      date: "February 28",
      status: true,
    },
    {
      id: 1,
      image: image4,
      title: "Black Friday",
      date: "February 28",
      status: false,
    },
  ];
  return (
    <div className="dealday_container">
      <div className="dealdayheader row">
        <div className="col-8">
          <Pageheader text={"Deal of The Day"} />
        </div>

        <div className="dealheader_button col-4">
          <Button title={"View All Products"} type={"danger"} />
        </div>
      </div>
      <div className="row">
        {datas.map(({ id, image, title, date, status }) => (
          <div className="col-6" key={id}>
            <Couponcard
              image={image}
              title={title}
              offnumber={500}
              monthandday={date}
              status={status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dealday;

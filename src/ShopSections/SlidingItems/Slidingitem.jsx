import React from "react";
import "../SlidingItems/Slidingitem.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Simplecard from "../../ShopComponents/SimpleCard/Simplecard";
import image1 from "../../Assets/Images/macbookpro.png";
import image2 from "../../Assets/Images/iwatch.png";
import image3 from "../../Assets/Images/ipadmini.png";
import image4 from "../../Assets/Images/macbookcharger.png";
import image5 from "../../Assets/Images/macbook2012.png";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slidingitem() {
  const dummyitems = [
    { id: 0, image: image1, name: "Maxbook Pro 2020", background: "green" },
    {
      id: 1,
      image: image2,
      name: "Iwatch Mini 2013",
      background: "gray",
    },
    { id: 0, image: image3, name: "Ipad mini", background: "blue" },
    {
      id: 0,
      image: image4,
      name: "T-mouth Macbook Charger",
      background: "red",
    },
    { id: 0, image: image5, name: "Macbook Pro 2012", background: "green" },
  ];

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowSize.width;
  return (
    <div className="slidingitems_container">
      <OwlCarousel
        className="owl-theme"
        animateIn={true}
        margin={70}
        loop={true}
        items={width <= 768 ? 1 : width <= 996 ? 1.7 : 4}
        dotsSpeed={1000}
        smartSpeed={5000}
        autoplayHoverPause={true}
        autoplayTimeout={3000}
        autoplay={true}
        responsiveClass>
        {dummyitems &&
          dummyitems.map(({ id, image, name, background }) => (
            <div key={id}>
              <Simplecard item_image={image} item_name={name} bg={background} />
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default Slidingitem;

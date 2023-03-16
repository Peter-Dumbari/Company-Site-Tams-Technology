import React, { useContext } from "react";
import "../SlidingItems/Slidingitem.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Simplecard from "../../ShopComponents/SimpleCard/Simplecard";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GlobalContext } from "../../Shopcontext/Provider";

function Slidingitem() {
  const {
    items: { items },
  } = useContext(GlobalContext);
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
        autoplayTimeout={3000}
        responsiveClass>
        {items &&
          items.map(({ id, image, name, background }) => (
            <div key={id}>
              <Simplecard item_image={image} item_name={name} bg={background} />
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default Slidingitem;

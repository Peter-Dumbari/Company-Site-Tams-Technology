import React from "react";
import { Testimonycard } from "../../Components/FancyCard/Card";
import "../TestimoniesSection/Testimony.scss";
import image1 from "../../Assets/Images/testimonial-1.jpg";
import image2 from "../../Assets/Images/testimonial-2.jpg";
import image3 from "../../Assets/Images/testimonial-3.jpg";
import image4 from "../../Assets/Images/testimonial-4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimony() {
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

  const Testimonies = [
    {
      id: 0,
      clientmessage:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolore doloribus possimus cupiditate voluptatem. Vitae, magni veritatis. Placeat at tempore vero.",
      clientname: "Peter Kinz",
      clientprofession: "Teaching",
      image: image1,
    },
    {
      id: 1,
      clientmessage:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolore doloribus possimus cupiditate voluptatem. Vitae, magni veritatis. Placeat at tempore vero.",
      clientname: "Peter Peter",
      clientprofession: "Soft-ware",
      image: image2,
    },
    {
      id: 2,
      clientmessage:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolore doloribus possimus cupiditate voluptatem. Vitae, magni veritatis. Placeat at tempore vero.",
      clientname: "Peter Dumbari",
      clientprofession: "Software Development",
      image: image3,
    },
    {
      id: 3,
      clientmessage:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolore doloribus possimus cupiditate voluptatem. Vitae, magni veritatis. Placeat at tempore vero.",
      clientname: "Peter Zeo",
      clientprofession: "Engineering",
      image: image4,
    },
  ];
  return (
    <div className="testimonies_container">
      <div className="testimonies_header">
        <h6 class=" text-uppercase">Testimonial</h6>
        <h1 class="mb-0">Our Clients Say!</h1>
      </div>
      <OwlCarousel
        className="owl-theme"
        animateIn={true}
        margin={30}
        loop
        dots={true}
        items={width <= 768 ? 1 : width <= 996 ? 1.7 : 3}
        dotsSpeed={1000}
        center={true}
        smartSpeed={2000}
        autoplayTimeout={5000}
        responsiveClass>
        {Testimonies &&
          Testimonies.map(
            ({ id, clientmessage, clientname, clientprofession, image }) => (
              <div className="item" key={id}>
                <Testimonycard
                  clientmessage={clientmessage}
                  clientname={clientname}
                  clientprofession={clientprofession}
                  image={image}
                />
              </div>
            )
          )}
      </OwlCarousel>
    </div>
  );
}

export default Testimony;

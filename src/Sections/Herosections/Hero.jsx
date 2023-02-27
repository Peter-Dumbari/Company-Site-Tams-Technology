import React from "react";
import "../Herosections/Hero.scss";
import imageone from "../../Assets/Images/carousel-1.jpg";
import imagetwo from "../../Assets/Images/carousel-2.jpg";
import Button from "../../Components/ButtonComponents/Button";

function Hero() {
  const buttonclick = () => {
    alert("something was cliked");
  };

  const carouselComponents = [
    { id: 0, image: imageone, active: "active" },
    { id: 1, image: imagetwo, active: null },
  ];

  return (
    <div
      id="carouselContainer"
      className="carousel slide"
      data-bs-ride="true"
      data-interval="1000">
      <div className="carouselItems">
        <div className="carousel-inner">
          {carouselComponents.map(({ id, image, active }) => (
            <div className={`carousel-item ${active}`} key={id}>
              <img src={image} className="d-block w-100" alt="..." />
              <div className="text_background">
                <div className="welcome_text_container">
                  <h5 className="text-white text-uppercase mb-3">
                    Computer Sales and Repairs
                  </h5>
                  <h1 className="display-3 text-white mb-4 animate__animated animate__slideInDown">
                    #1 Place For All Your
                    <span className="primary_colour">Computer </span>
                    Deals
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea elitr.
                  </p>
                  <div className="row">
                    <div className="col animate__animated animate__slideInLeft">
                      <Button
                        title="Read More"
                        type={"danger"}
                        onclick={buttonclick}
                      />
                    </div>
                    <div className="col animate__animated animate__slideInRight">
                      <Button title="Free Quote" type={"primary"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-2">
          <button
            type="button"
            data-bs-target="#carouselContainer"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselContainer"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

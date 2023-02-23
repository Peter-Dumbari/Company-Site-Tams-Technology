import React from "react";
import Ourservicecard from "../../Components/OurserviceCard/Ourservicecard";
import "../OurServices/Ourservices.scss";
import image1 from "../../Assets/Images/service-1.jpg";
import image2 from "../../Assets/Images/service-2.jpg";
import image3 from "../../Assets/Images/service-3.jpg";

function Ourservices() {
  return (
    <div className="ourservice_container">
      <div className="header_text">
        <h6 className="text-uppercase">Our Services</h6>
        <h1 className="mb-5">Explore Our Services</h1>
      </div>
      <div className="row">
        <div className="col col-md-4">
          <Ourservicecard
            title={"Air Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image1}
            btntext="Read More"
          />
        </div>
        <div className="col col-md-4">
          <Ourservicecard
            title={"Ocean Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image2}
            btntext="Read More"
          />
        </div>
        <div className="col col-md-4">
          <Ourservicecard
            title={"Road Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image3}
            btntext="Read More"
          />
        </div>
        <div className="col col-md-4">
          <Ourservicecard
            title={"Air Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image1}
            btntext="Read More"
          />
        </div>
        <div className="col col-md-4">
          <Ourservicecard
            title={"Ocean Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image2}
            btntext="Read More"
          />
        </div>
        <div className="col col-md-4">
          <Ourservicecard
            title={"Road Freight"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ut?"
            }
            image={image3}
            btntext="Read More"
          />
        </div>
      </div>
    </div>
  );
}

export default Ourservices;

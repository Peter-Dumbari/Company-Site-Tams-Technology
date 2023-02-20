import React from "react";
import Aboutsection from "../../Sections/AboutSection/Aboutsection";
import Hero from "../../Sections/Herosections/Hero";
import Ourfeature from "../../Sections/OurFeatures/Ourfeature";
import Ourservices from "../../Sections/OurServices/Ourservices";
import Pricingplan from "../../Sections/PricingPlan/Pricingplan";
import Somefacts from "../../Sections/SomeFactsSection/Somefacts";

function Landingpage() {
  return (
    <>
      <Hero />
      <Aboutsection />
      <Somefacts />
      <Ourservices />
      <Ourfeature />
      <Pricingplan />
    </>
  );
}

export default Landingpage;

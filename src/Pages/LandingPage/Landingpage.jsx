import React from "react";
import Footer from "../../Components/Footer/Footer";
import Aboutsection from "../../Sections/AboutSection/Aboutsection";
import Getquotes from "../../Sections/GetQouteSection/Getquotes";
import Hero from "../../Sections/Herosections/Hero";
import Ourfeature from "../../Sections/OurFeatures/Ourfeature";
import Ourservices from "../../Sections/OurServices/Ourservices";
import Ourteamsec from "../../Sections/OurTeamSection/Ourteamsec";
import Pricingplan from "../../Sections/PricingPlan/Pricingplan";
import Somefacts from "../../Sections/SomeFactsSection/Somefacts";
import Testimony from "../../Sections/TestimoniesSection/Testimony";

function Landingpage() {
  return (
    <>
      <Hero />
      <Aboutsection />
      <Somefacts />
      <Ourservices />
      <Ourfeature />
      <Pricingplan />
      <Getquotes />
      <Ourteamsec />
      <Testimony />
      <Footer />
    </>
  );
}

export default Landingpage;

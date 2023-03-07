import React from "react";
import GlobalProvider from "../../Shopcontext/Provider";
import Shophero from "../../ShopSections/ShopHerosection/Shophero";
import Shopitems from "../../ShopSections/Shopitems/Shopitems";
import Shopnav from "../../ShopSections/ShopNav/Shopnav";
import Slidingitem from "../../ShopSections/SlidingItems/Slidingitem";
import Footer from "../../Components/Footer/Footer";
import Dealday from "../../ShopSections/Dealdaysection/Dealday";
import Bottomboard from "../../ShopSections/DisplayBottomBoard/Bottomboard";
function Shop() {
  return (
    <>
      <Shopnav />
      <Shophero />
      <Slidingitem />
      <Shopitems />
      <Dealday />
      <Bottomboard />
      <Footer />
    </>
  );
}

export default Shop;

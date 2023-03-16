import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backtotop from "./Components/BacktotopComponent/Backtotop";
import "animate.css";
import Loader from "./Components/Loader/Loader";
import GlobalProvider from "./Shopcontext/Provider";
import Cartitems from "./ShopSections/CartItems/Cartitems";

function App() {
  const Landingpage = lazy(() => import("./Pages/LandingPage/Landingpage"));
  const ShoppingPage = lazy(() => import("./Pages/Shop/Shop"));
  const ItemDetail = lazy(() => import("./ShopSections/Detailitem/Detailitem"));

  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Landingpage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/shoppingpage"
            element={
              <Suspense fallback={<Loader />}>
                <ShoppingPage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/item_detail/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ItemDetail />
              </Suspense>
            }
          />
        </Routes>
        <Backtotop />
        <Cartitems />
      </Router>
    </GlobalProvider>
  );
}

export default App;

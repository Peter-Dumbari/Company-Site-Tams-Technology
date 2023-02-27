import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backtotop from "./Components/BacktotopComponent/Backtotop";
import "animate.css";
import Loader from "./Components/Loader/Loader";

function App() {
  const Landingpage = lazy(() => import("./Pages/LandingPage/Landingpage"));

  return (
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
      </Routes>
      <Backtotop />
    </Router>
  );
}

export default App;

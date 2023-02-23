import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";
import Backtotop from "./Components/BacktotopComponent/Backtotop";

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
            <Suspense fallback={<div>Loading...</div>}>
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

import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";

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
    </Router>
  );
}

export default App;

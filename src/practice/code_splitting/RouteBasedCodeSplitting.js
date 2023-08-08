import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";

const HomePage = lazy(() => import("./HomePage"));
const AboutPage = lazy(() => import("./AboutPage"));

function RouteBasedCodeSplitting() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RouteBasedCodeSplitting;

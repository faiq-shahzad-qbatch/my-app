import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  //   createBrowserRouter,
  //   RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function ReactRouterExample() {
  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "about/:name",
  //       element: <About />,
  //     },
  //     {
  //       path: "contact",
  //       element: <Contact />,
  //     },
  //   ]);

  return (
    // <>
    //   <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    // </>

    <>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about/Faiq">About</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default ReactRouterExample;

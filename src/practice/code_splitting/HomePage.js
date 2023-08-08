import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    console.log("HomePage mounted!");

    return () => {
      console.log("HomePage unmounted!");
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")}>Navigate to About Page</button>
    </>
  );
}

export default HomePage;

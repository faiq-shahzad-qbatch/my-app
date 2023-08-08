import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  useEffect(() => {
    console.log("AboutPage mounted!");

    return () => {
      console.log("AboutPage unmounted!");
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => navigate("/")}>Navigate to Home Page</button>
    </>
  );
}

export default AboutPage;

import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h2>About</h2>
      <p>Name: {params.name}</p>
    </div>
  );
}

export default About;

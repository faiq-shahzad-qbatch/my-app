import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>Contact</h2>
      <p>Phone Number: {location.state.number}</p>
    </div>
  );
}

export default Contact;

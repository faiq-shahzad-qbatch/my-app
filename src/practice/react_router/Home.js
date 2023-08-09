import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const h1Ref = useRef(null);

  const navigate = useNavigate();

  const data = { number: "0300-8655763" };

  function navigateToAbout() {
    navigate("/contact", { state: data });
  }

  function changeBackgroundColor() {
    const myH1 = h1Ref.current;
    myH1.style.backgroundColor = "red";
  }

  return (
    <div>
      <h1 ref={h1Ref}>Home</h1>
      <button onClick={navigateToAbout}>Navigate To Contact</button>
      <br />
      <button onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  );
}

export default Home;

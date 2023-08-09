import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LevelContext } from "./LevelContext";

function Section({ children }) {
  const level = useContext(LevelContext);
  console.log("Section level:", level);
  return (
    <section style={{ border: `${level}px solid black`, margin: `${level}vw` }}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Section;

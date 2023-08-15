import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function setToLight() {
    setTheme("light");
  }

  function setToDark() {
    setTheme("dark");
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeUpdateContext.Provider value={[setToLight, setToDark]}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.object,
};

export default ThemeProvider;

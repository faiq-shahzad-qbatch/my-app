import React, { useEffect } from "react";
import ThemeProvider, { useTheme, useThemeUpdate } from "./ThemeContext";

function GrandChild() {
  const theme = useTheme();
  //   console.log(theme);

  useEffect(() => {
    console.log("GrandChild mounted!");

    return () => {
      console.log("GrandChild unmounted!");
    };
  });

  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}

function Child() {
  // const theme = useTheme();
  //   console.log(theme);

  useEffect(() => {
    console.log("Child mounted!");

    return () => {
      console.log("Child unmounted!");
    };
  });

  return (
    <>
      <GrandChild />
    </>
  );
}

function Parent() {
  // const theme = useTheme();
  //   console.log(theme);
  const [setToLight, setToDark] = useThemeUpdate();

  useEffect(() => {
    console.log("Parent mounted!");

    return () => {
      console.log("Parent unmounted!");
    };
  });

  return (
    <>
      <button onClick={setToLight}>Light</button>
      <br />
      <button onClick={setToDark}>Dark</button>
      <Child />
    </>
  );
}

function UseContextCustomExample() {
  useEffect(() => {
    console.log("App mounted!");

    return () => {
      console.log("App unmounted!");
    };
  });

  return (
    <>
      <ThemeProvider>
        <Parent />
      </ThemeProvider>
    </>
  );
}

export default UseContextCustomExample;

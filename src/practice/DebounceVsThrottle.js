import React, { useEffect, useState } from "react";

function DebounceVsThrottle() {
  function debounce(cb, delay = 1000) {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;

      setTimeout(timeoutFunc, delay);
    };
  }

  //   const [defaultText, setDefaultText] = useState("");
  //   const [debounceText, setDebounceText] = useState("");
  //   const [throttleText, setThrottleText] = useState("");

  //   const updateDebouceText = debounce((text) => {
  //     // setDebounceText(text);
  //     console.log(text);
  //   });

  //   const updateThrottleText = throttle((text) => {
  //     // setThrottleText(text);
  //     console.log(text);
  //   });

  //   function handleChange(e) {
  //     // setDefaultText(e.target.value);
  //     // updateDebouceText(e.target.value);
  //     updateThrottleText(e.target.value);
  //   }

  const [defaultText, setDefaultText] = useState(0);
  const [debounceText, setDebounceText] = useState(0);
  const [throttleText, setThrottleText] = useState(0);

  const updateDebouceText = debounce((text) => {
    setDebounceText((prev) => prev + 1);
    // console.log(text);
  });

  const updateThrottleText = throttle((text) => {
    setThrottleText((prev) => prev + 1);
    // console.log(text);
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setDefaultText((prev) => prev + 1);
      updateDebouceText();
      updateThrottleText();
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setDefaultText((prev) => prev + 1);
        updateDebouceText();
        updateThrottleText();
      });
    };
  }, []);

  return (
    <>
      {/* <input onChange={handleChange} /> */}
      <h1>Default: {defaultText}</h1>
      <h1>Debounce: {debounceText}</h1>
      <h1>Throttle: {throttleText}</h1>
    </>
  );
}

export default DebounceVsThrottle;

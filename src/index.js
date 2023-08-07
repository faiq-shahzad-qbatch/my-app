import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import MyComponent from "./practice/MyComponent";
// import MyComponent2 from "./practice/MyComponent2";
// import MyComponent3 from "./practice/MyComponent3";
import MyComponent4 from "./practice/MyComponent4";
// import MyComponent5 from "./practice/MyComponent5";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap styles
// import './styles.css'; // Import the CSS file // Import the Tailwind CSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <App /> */}
    {/* <MyComponent /> */}
    {/* <MyComponent2 /> */}
    {/* <MyComponent3 /> */}
    <MyComponent4 />
    {/* <MyComponent5 /> */}
    {/* </React.StrictMode> */}
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

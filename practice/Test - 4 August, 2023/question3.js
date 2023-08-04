const axios = require("axios");

// Using the request interceptor we can capture any request made using axios before it is actually sent to the server and perform some manipulations on the request if required

axios.interceptors.request.use(
  (request) => {
    console.log("Captured Request!");
    // console.log(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Using the response interceptor we can capture the response of any request made through axios and manipulate the response if required

axios.interceptors.response.use(
  (response) => {
    console.log("Captured Response!");
    // console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Whenever we make any request it will be intercepted by our interceptors

function getData() {
  axios
    .get("url")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

// getData();

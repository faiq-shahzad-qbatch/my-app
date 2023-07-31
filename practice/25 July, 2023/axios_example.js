// Import the Axios library
const axios = require("axios");

// Define the URL you want to make a GET request to
const apiUrl = "https://www.google.com.pk";

// Make a GET request using Axios
axios
  .get(apiUrl)
  .then((response) => {
    // Handle the successful response here
    console.log("Response:", response.data);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error:", error.message);
  });

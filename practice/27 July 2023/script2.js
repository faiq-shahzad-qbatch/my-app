const axios = require("axios");

function pingGoogle() {
  return axios.get("https://www.google.com");
}

async function sendRequests() {
  const numberOfRequests = 1000; // Change this value to control the number of requests

  const requestPromises = [];

  for (let i = 0; i < numberOfRequests; i++) {
    requestPromises.push(pingGoogle());
  }

  try {
    const responses = await Promise.all(requestPromises);
    responses.forEach((response, i) => {
      console.log(`Request ${i + 1} sent successfully.`);
    });
  } catch (error) {
    console.error("Error sending requests:", error.message);
  }
}

sendRequests();

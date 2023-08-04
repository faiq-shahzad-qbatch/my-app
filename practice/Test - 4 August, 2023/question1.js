const axios = require("axios");

// HTTP GET
// Used when we simply want to read data from a server and not perform any other CRUD (except R) operations

function getRequest() {
  axios
    // we can also provide some params in the url if we want
    .get("url/params", {
      params: {
        // if we want to specify how we want to get specific data we can do that using query params
        query_parameter: "value",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.message);
    });
}

// getRequest();

// HTTP POST
// Used when we want to create some data on the server

function postRequest() {
  axios
    .post(
      "url",
      // we provide the data that we want to create on the server in the request body
      { data: "value" },
      {
        // we can also pass some additional query params if required (typically not required)
        params: {
          query_parameter: "value",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.message);
    });
}

// postRequest();

// HTTP PUT
// Used when we want to update data on the server and completely replace the old data

function putRequest() {
  axios
    .put(
      "url",
      // we provide the data that we want to update on the server in the request body
      { data: "value" },
      {
        // we can also pass some additional query params if required (typically not required)
        params: {
          query_parameter: "value",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.message);
    });
}

// putRequest();

// HTTP PATCH
// Used when we want to update data on the server and NOT completely replace the old data but simply update the old data with some new values

function patchRequest() {
  axios
    .patch(
      "url",
      // we provide the data that we want to update on the server in the request body
      { data: "value" },
      {
        // we can also pass some additional query params if required (typically not required)
        params: {
          query_parameter: "value",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.message);
    });
}

// patchRequest();

// HTTP DELETE
// Used when we want to delete some data from the server

function deleteRequest() {
  axios
    // we typically provide the id of the data that we want to delete in the params of the url
    .delete("url/id", {
      // we can also pass some additional query params if required (typically not required)
      params: {
        query_parameter: "value",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.message);
    });
}

// deleteRequest();

// Multiple requests

function multipleRequests() {
  // We can make many requests here using axios
  const request1 = axios.get("url1");
  const request2 = axios.get("url2");

  // Using axios.all we wait for all of the requests to complete and then we can get their individual responses using axios.spread
  axios
    .all([request1, request2])
    .then(
      axios.spread((response1, response2) => {
        console.log(response1.data);
        console.log(response2.data);
      })
    )
    .catch((error) => {
      console.error(error.response.message);
    });
}

// multipleRequests();

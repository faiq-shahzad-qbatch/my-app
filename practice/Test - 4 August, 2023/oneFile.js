const axios = require("axios");

///////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION 1

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

///////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION 2

// We should using async/await when the result of our previous api call is needed for our next api call (i.e they are dependent)
// For example if we want to fetch the authToken and then use that token in subsequent requests then async await will be better

// If both our api calls are independent then we do not need to using async await we can simply use .then or axios.all
// For example if we want to simply get data of two products we can do this using .then as the api calls are independent

async function usingAsyncAwait() {
  // Using async await if we want to call multiple apis our code will basically work synchronously where each call will run after the other sequentially
  // The pro of this is that we can safely execute dependent apis but the con is that it might be slower as it is not happening in parallel
  try {
    const response1 = await axios.get("url1");

    console.log(response1.data);

    const response2 = await axios.get("url2");

    console.log(response2.data);
  } catch (error) {
    console.log(error.response.message);
  }
}

function usingThenWithPromises() {
  // Using then with promises all of our multiple axios calls will work asynchronously (in parallel)
  // The pro of this is that our code will run faster as it runs in parallel but if we have api calls which are dependent then our code will not work properly
  axios
    .get("url1")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.message);
    });

  axios
    .get("url2")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.message);
    });
}

// usingAsyncAwait();
// usingThenWithPromises();

///////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION 3

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

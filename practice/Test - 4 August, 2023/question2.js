const axios = require("axios");

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

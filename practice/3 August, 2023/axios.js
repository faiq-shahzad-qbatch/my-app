const axios = require("axios");

async function testAxios() {
  let data = { username: "kminchelle", password: "0lelplR" };
  const response = await axios.post("https://dummyjson.com/auth/login", data);
  const accessToken = response.data.token;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const controller = new AbortController();
  const signal = controller.signal;

  // GET

  axios
    .get("https://dummyjson.com/auth/products/search", {
      headers,
      params: {
        q: "phone",
      },
      signal,
    })
    .then((response) => {
      console.log(response.headers);
      console.log(response.status);
      console.log(response.data);
    })
    .catch((error) => {
      if (error.name === "CanceledError") {
        console.log(error.message);
      } else {
        console.error(error);
      }
    });

  // POST

  //   data = { firstName: "Faiq", lastName: "Shahzad", age: 23 };

  //   axios
  //     .post("https://dummyjson.com/users/add", data, {
  //       headers,
  //       signal,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.name === "CanceledError") {
  //         console.log(error.message);
  //       } else {
  //         console.error(error);
  //       }
  //     });

  // PUT

  //   axios
  //     .patch(
  //       "https://dummyjson.com/users/1",
  //       { lastName: "King" },
  //       {
  //         headers,
  //         signal,
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.name === "CanceledError") {
  //         console.log(error.message);
  //       } else {
  //         console.error(error);
  //       }
  //     });

  // PATCH

  //   axios
  //     .patch(
  //       "https://dummyjson.com/users/1",
  //       { lastName: "King" },
  //       {
  //         headers,
  //         signal,
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.name === "CanceledError") {
  //         console.log(error.message);
  //       } else {
  //         console.error(error);
  //       }
  //     });

  // DELETE

  //   axios
  //     .delete("https://dummyjson.com/users/1", {
  //       headers,
  //       signal,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.name === "CanceledError") {
  //         console.log(error.message);
  //       } else {
  //         console.error(error);
  //       }
  //     });
}

testAxios();

// const controller = new AbortController();

// const signal = controller.signal;

// const signal = AbortSignal.timeout(1);

// axios
//   .get("https://dummyjson.com/products/1", { headers })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (error.name === "CanceledError") {
//       console.log(error.message);
//     } else {
//       console.error(error);
//     }
//   });

// const request1 = axios.get("https://dummyjson.com/todos/1");
// const request2 = axios.get("https://dummyjson.com/todos/2");

// axios.all([request1, request2]).then(
//   axios.spread((response1, response2) => {
//     console.log(response1.data);
//     console.log(response2.data);
//   })
// );

// const payload = { firstName: "Faiq", lastName: "Shahzad", age: 23 };

// const headers = { "Content-Type": "application/json" };

// axios
//   .post("https://dummyjson.com/users/add", payload, { headers })
//   .then((response) => {
//     console.log(response.data);
//   });

// axios
//   .get("https://dummyjson.com/products/1")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

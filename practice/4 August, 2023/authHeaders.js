const axios = require("axios");

let authToken;

async function getToken() {
  try {
    const payload = { username: "kminchelle", password: "0lelplR" };
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      payload
    );
    //   axios.defaults.headers.common["Authorization"] = data.token;
    authToken = data.token;
  } catch (error) {
    console.log(error);
  }
}

async function getData() {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    const { data } = await axios.get("https://dummyjson.com/auth/users/1", {
      headers,
    });

    return data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data);
  }
}

async function main() {
  await getToken();

  const result = await getData();

  console.log(result);
}

main();

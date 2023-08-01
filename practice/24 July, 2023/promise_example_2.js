async function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const success = false; // Simulate success or failure
      if (success) {
        const data = { name: "John", age: 30 };
        resolve(data); // Resolves the Promise with the data
      } else {
        reject(new Error("Failed to fetch data.")); // Rejects the Promise with an error
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchDataFromServer();
    console.log("Resolved:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getData();

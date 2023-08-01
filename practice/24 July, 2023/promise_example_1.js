function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        const data = { name: "John", age: 30 };
        resolve(data); // Resolves the Promise with the data
      } else {
        reject(new Error("Failed to fetch data.")); // Rejects the Promise with an error
      }
    }, 1000);
  });
}

// Usage of the fetchDataFromServer function with then() method
fetchDataFromServer()
  .then(
    (result) => {
      console.log("Resolved:", result); // Output: "Resolved: { name: 'John', age: 30 }"
      // You can return a new value here, which will be used for the next .then() or .catch()
      return result.age;
    },
    (error) => {
      console.error("Rejected:", error.message); // Output: "Rejected: Failed to fetch data."
      // You can throw an error or return a new value here if needed
      throw error;
    }
  )
  .then((age) => {
    console.log("Age:", age); // Output: "Age: 30"
  })
  .catch((error) => {
    console.error("Catch block:", error); // Output: "Catch block: Error: Failed to fetch data."
  });

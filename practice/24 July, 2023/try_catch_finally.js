function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return "Error";
  } finally {
    console.log(
      "This will always execute, regardless of whether there was an error or not."
    );
  }
}

// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: "An error occurred: Division by zero is not allowed."
//         "This will always execute, regardless of whether there was an error or not."

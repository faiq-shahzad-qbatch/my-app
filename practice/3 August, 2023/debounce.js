const _ = require("lodash");

// Original function to be debounced
function search(query) {
  // Perform search operation based on the query
  console.log("Searching for:", query);
}

// Create a debounced version of the search function
const debouncedSearch = _.debounce(search, 500);

// Simulate continuous calls to the debounced function
debouncedSearch("apple"); // This will not invoke the function immediately
debouncedSearch("orange"); // This will not invoke the function immediately
debouncedSearch("mango"); // This will not invoke the function immediately

// After 500 milliseconds, the original search function will be called with the last argument 'orange'
// Output: "Searching for: orange"

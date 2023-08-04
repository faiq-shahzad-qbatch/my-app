const _ = require("lodash");

// Original function to be throttled
function saveScrollPosition(position) {
  // Save the scroll position to the database or perform some action
  console.log("Saving scroll position:", position);
}

// Create a throttled version of the saveScrollPosition function
const throttledSaveScrollPosition = _.throttle(saveScrollPosition, 1000, {
  leading: true,
});

// Simulate continuous calls to the throttled function
throttledSaveScrollPosition(50); // This will immediately invoke the function
throttledSaveScrollPosition(100); // This will be ignored as it is within the throttle interval
throttledSaveScrollPosition(200); // This will be ignored as it is within the throttle interval

// After 1000 milliseconds, the original saveScrollPosition function will be called with the last argument '200'
// Output: "Saving scroll position: 200"

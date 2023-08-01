let count = 10;

function countdown() {
  if (count >= 0) {
    console.log(`Time remaining: ${count} seconds`);
    count--;
  } else {
    clearInterval(intervalId);
    console.log("Time's up!");
  }
}

// Start the countdown with an interval of 1 second (1000 milliseconds)
const intervalId = setInterval(countdown, 1000);

const moment = require("moment");

// let date = moment("2023-05-08", "YYYY-MM-DD");

// Create a Moment object
const date = moment("2023-08-01 12:34:56", "YYYY-MM-DD HH:mm:ss");

// Use startOf with different units
const startOfDay = date.startOf("day");
const startOfMonth = date.startOf("month");
const startOfYear = date.startOf("year");

console.log(startOfDay.format("YYYY-MM-DD HH:mm:ss")); // Output: "2023-08-01 00:00:00"
console.log(startOfMonth.format("YYYY-MM-DD HH:mm:ss")); // Output: "2023-08-01 00:00:00"
console.log(startOfYear.format("YYYY-MM-DD HH:mm:ss")); // Output: "2023-01-01 00:00:00"

// console.log(date.subtract(1, "year"));

// console.log(date.unix());

// console.log(date.from(moment("2023-07-31", "YYYY-MM-DD")));

// console.log(date);

// const formattedDate = date.format("YYYY-MM-DD HH:mm:ss");

// console.log(formattedDate);

// console.log(date.subtract(1, "day"));

// const isBefore = date.isBefore("2023-08-02", "YYYY-MM-DD");

// console.log(isBefore);

// const duration = moment.duration(2, "hours");

// console.log(duration);

// const relativeTime = date.fromNow();

// console.log(relativeTime);

// 1. Print current date in the following format: "Aug 1st, 2023".
// 2. Get a `Date` type of object from a `moment` object.
// 3. Print your current date in UTC time-zone.
// 4. Find out and list all the primitive datatypes that can be passed to moment constructor without causing a crash/exception.
// 5. Create a function that takes an array of 2 moment dates as it's parameter. Check if 1st date is less than or equal to 2nd date. If so, return true, otherwise return false. Handle cases like array having 0 or 1 date.
// 6. Create a function that takes a unix timestamp and returns a date formatted like this: "2023-07-01 15:50:11". Basically, year comes first, then month, then date. And after that time separated by colon (:)
// 7. Create a function that returns difference between today and one week ago in terms of
//    7.1. Minutes
//    7.2. Hours

// Any terminology you don't understand, google it first, still don't understand, ask me.

const moment = require("moment");

// 2.7

function getDifference() {
  const oneWeek = moment.duration(1, "week");

  console.log(
    `One week ago in minutes: ${moment.duration(oneWeek).asMinutes()}`
  );
  console.log(`One week ago in hours: ${moment.duration(oneWeek).asHours()}`);
}

getDifference();

// 2.6

// function formateDate(unixTimestamp) {
//   const formatedMoment = moment.unix(unixTimestamp);

//   return formatedMoment.format("YYYY-MM-DD HH:MM:SS");
// }

// const currentDate = moment();

// const unixTimestamp = currentDate.unix();

// console.log(formateDate(unixTimestamp));

// 2.5

// function checkDates([moment1, moment2]) {
//   return !moment1.isAfter(moment2);
// }

// const moment1 = moment("2000-05-31", "YYYY-MM-DD");
// const moment2 = moment("2000-05-30", "YYYY-MM-DD");
// const moment3 = moment("2000-05-31", "YYYY-MM-DD");
// const moment4 = moment("2000-06-01", "YYYY-MM-DD");

// console.log(checkDates([moment2, moment1])); // true
// console.log(checkDates([moment3, moment1])); // true
// console.log(checkDates([moment4, moment1])); // false

// 2.4

// const moment1 = moment("2000-05-31");
// const moment2 = moment(1318781876406);
// const moment3 = moment(null);
// const moment4 = moment(undefined);

// console.log(moment1); // Moment<2000-05-31T00:00:00+05:00>
// console.log(moment2); // Moment<2011-10-16T21:17:56+05:00>
// console.log(moment3); // Moment<Invalid date>
// console.log(moment4); // Moment<2023-08-01T17:48:36+05:00>

// 2.3

// const currentDate = moment().utc().format();

// console.log(currentDate);

// 2.2

// const currentDate = moment();

// const dateObject = Date(currentDate.unix());

// console.log(dateObject);

// 2.1

// const currentDate = moment();

// const formatedDate = currentDate.format("MMM Do, YYYY");

// console.log(formatedDate);

const moment = require("moment-timezone");

function convertTimezone(date, timezone) {
  const convertedDate = date.tz(timezone);

  return convertedDate.format("LLLL");
}

const currentDate = moment.tz(moment(), "Asia/Karachi");

console.log(currentDate.format("LLLL"));
console.log(convertTimezone(currentDate, "America/New_York"));

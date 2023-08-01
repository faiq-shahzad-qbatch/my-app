const moment = require("moment");
require("moment-timezone");

// Get the current date and time in a specific time zone
const timeZone = "America/New_York";
const currentDateTime = moment().tz(timeZone);
console.log("Current Date and Time in New York:", currentDateTime.format());

// Convert a date and time from one time zone to another
const dateTimeInLondon = "2023-07-25 12:00:00";
const convertedDateTime = moment(dateTimeInLondon).tz("Europe/London");
console.log("Converted Date and Time in London:", convertedDateTime.format());

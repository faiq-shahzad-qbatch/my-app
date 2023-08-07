const moment = require("moment-timezone");

function yourDateConversionFunction(date) {
  const localTime = moment.tz(date.tz());

  const timeDifference = localTime.utcOffset() - moment.tz("EST").utcOffset();

  return timeDifference != 0
    ? date.clone().add(timeDifference, "minutes")
    : date.clone();
}

// const date = moment.tz("2023-08-02 00:00:00", "America/New_York");
const date = moment.tz("2023-08-02 00:00:00", "America/Los_Angeles");
// const date = moment.tz("2023-08-02 00:00:00", "EST");
const convertedDate = yourDateConversionFunction(date); // Input should a date with time set to 00:00
console.log(`Date before conversion: ${date.format("lll z")}`);
console.log(
  `Date after conversion: ${moment.tz(convertedDate, "EST").format("lll z")}`
); // OUTPUT should be YYYY-MM-DD 00:00:00 EST

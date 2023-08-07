const moment = require("moment-timezone");

function yourDateConversionFunction(date) {
  const localTime = moment.tz(date.tz());

  const timeDifference = localTime.utcOffset() - moment.tz("EST").utcOffset();

  return timeDifference != 0
    ? date.clone().add(timeDifference, "minutes")
    : date.clone();
}

const date = moment.tz("2023-08-02 00:00:00", "America/Los_Angeles");
const convertedDate = yourDateConversionFunction(date);
console.log(`Date before conversion: ${date.format("lll z")}`);
console.log(
  `Date after conversion: ${moment.tz(convertedDate, "EST").format("lll z")}`
);

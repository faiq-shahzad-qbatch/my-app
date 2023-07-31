// Example usage of winston in a Node.js application

const winston = require("winston");

// Create a logger instance
const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

// Log some messages
logger.log("info", "This is an informational message.");
logger.log("error", "This is an error message.");

// You can also use convenience methods for different log levels
logger.info("This is another informational message.");
logger.error("This is another error message.");

const dotenv = require("dotenv-safe");

// Load environment variables from .env file
dotenv.config();

// Now you can access environment variables as usual
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.SECRET_KEY);

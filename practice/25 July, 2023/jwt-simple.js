const jwt = require("jwt-simple");

// Secret key used for encoding and decoding
const secretKey = "your_secret_key";

// Payload data for the JWT
const payload = {
  username: "john_doe",
  role: "admin",
};

// Encode (sign) the payload into a JWT
const token = jwt.encode(payload, secretKey);
console.log("Encoded JWT:", token);

// Decode (verify) the JWT to get the payload data back
const decodedPayload = jwt.decode(token, secretKey);
console.log("Decoded Payload:", decodedPayload);

// const expirationDate = new Date(Date.now() + 3600000); // 1 hour from now

// const options = {
//   expiresIn: expirationDate,
//   algorithm: "HS256", // Algorithm for signing the token
//   header: {
//     typ: "JWT", // Token type
//     alg: "HS256", // Algorithm for signing the token
//   },
// };

// const tokenWithExpiration = jwt.encode(payload, secretKey, options);
// console.log("JWT with Expiration:", tokenWithExpiration);

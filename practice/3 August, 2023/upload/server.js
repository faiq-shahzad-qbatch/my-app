const express = require("express");
const multer = require("multer");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (request, response) => {
  if (!request.file) {
    return response.status(400).send("No file uploaded!");
  }

  console.log("File uploaded!");
  console.log("File details:");
  console.log(request.file);
  response
    .status(200)
    .send(`'${request.file.originalname}' uploaded successfully!`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

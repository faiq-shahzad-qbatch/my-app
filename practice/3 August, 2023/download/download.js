const axios = require("axios");
const fs = require("fs");
const csvParser = require("csv-parser");

async function downloadCSV() {
  const fileURL =
    "https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv";
  const downloadPath = "sampleFile.csv";

  try {
    const response = await axios.get(fileURL, { responseType: "stream" });

    console.log("Before");

    await new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(downloadPath))
        .on("finish", () => {
          console.log("CSV file downloaded and saved successfully!");
          resolve();
        })
        .on("error", (error) => {
          console.log("Error while downloading CSV file!");
          console.log(error.message);
          reject(error);
        });
    });

    console.log("Middle");

    await new Promise((resolve, reject) => {
      fs.createReadStream(downloadPath)
        .pipe(csvParser())
        .on("data", (data) => {
          console.log(data);
        })
        .on("finish", () => {
          console.log("Done reading CSV file!");
          resolve();
        })
        .on("error", (error) => {
          console.log("Error while reading CSV file!");
          console.log(error.message);
          reject(error);
        });
    });

    console.log("After");
  } catch (error) {
    console.log(error);
  }
}

async function downloadXML() {
  const fileURL = "https://www.w3schools.com/xml/note.xml";
  const downloadPath = "sampleFile.xml";

  try {
    const response = await axios.get(fileURL, { responseType: "stream" });

    console.log("Before");

    await new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(downloadPath))
        .on("finish", () => {
          console.log("XML file downloaded and saved successfully!");
          resolve();
        })
        .on("error", (error) => {
          console.log("Error while downloading XML file!");
          console.log(error.message);
          reject(error);
        });
    });

    console.log("Middle");

    await new Promise((resolve, reject) => {
      fs.readFile(downloadPath, "utf-8", (error, data) => {
        if (error) {
          console.log("Error while reading XML file!");
          console.log(error.message);
          reject(error);
        } else {
          console.log(data);
          console.log("Done reading XML file!");
          resolve();
        }
      });
    });

    console.log("After");
  } catch (error) {
    console.log(error);
  }
}

async function downloadJSON() {
  const fileURL =
    "https://support.oneskyapp.com/hc/en-us/article_attachments/202761727/example_2.json";
  const downloadPath = "sampleFile.json";

  console.log("Before");

  try {
    const response = await axios.get(fileURL, { responseType: "json" });

    await new Promise((resolve, reject) => {
      fs.writeFile(
        downloadPath,
        JSON.stringify(response.data),
        (error, data) => {
          if (error) {
            console.log("Error while downloading JSON file!");
            reject(error);
          } else {
            console.log("JSON file downloaded and saved successfully!");
            resolve();
          }
        }
      );
    });

    console.log("Middle");

    await new Promise((resolve, reject) => {
      fs.readFile(downloadPath, "utf-8", (error, data) => {
        if (error) {
          console.log("Error while reading JSON file!");
          reject(error);
        } else {
          console.log(JSON.parse(data));
          console.log("Done reading JSON file!");
          resolve();
        }
      });
    });

    console.log("After");
  } catch (error) {
    console.log(error);
  }
}

async function downloadPDF() {
  const fileURL = "https://sample-videos.com/pdf/Sample-pdf-5mb.pdf";
  const downloadPath = "sampleFile.pdf";

  try {
    const response = await axios.get(fileURL, { responseType: "arraybuffer" });

    await new Promise((resolve, reject) => {
      fs.writeFile(downloadPath, response.data, (error, data) => {
        if (error) {
          console.log("Error while saving PDF file!");
          reject(error);
        } else {
          console.log("PDF file downloaded and saved successfully!");
          resolve();
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function downloadJPG() {
  const fileURL = "https://sample-videos.com/img/Sample-jpg-image-50kb.jpg";
  const downloadPath = "sampleFile.jpg";

  try {
    const response = await axios.get(fileURL, { responseType: "arraybuffer" });

    await new Promise((resolve, reject) => {
      fs.writeFile(downloadPath, response.data, "binary", (error, data) => {
        if (error) {
          console.log("Error while saving JPG file!");
          reject(error);
        } else {
          console.log("JPG file downloaded and saved successfully!");
          resolve();
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function downloadZip() {
  const fileURL = "https://sample-videos.com/zip/10mb.zip";
  const downloadPath = "sampleFile.zip";

  try {
    const response = await axios.get(fileURL, { responseType: "arraybuffer" });

    await new Promise((resolve, reject) => {
      fs.writeFile(downloadPath, response.data, "binary", (error, data) => {
        if (error) {
          console.log("Error while saving Zip file!");
          reject(error);
        } else {
          console.log("Zip file downloaded and saved successfully!");
          resolve();
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

// downloadCSV();
// downloadXML();
// downloadJSON();
// downloadPDF();
// downloadJPG();
// downloadZip();

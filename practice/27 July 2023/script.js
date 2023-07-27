const axios = require("axios");
const puppeteer = require("puppeteer");

const url = "https://www.google.com";
const numberOfRequests = 1000;

function pingGoogle() {
  return axios.get(url);
}

async function openBrowser() {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
}

async function sendRequests() {
  const requestPromises = [];

  for (let i = 0; i < numberOfRequests; i++) {
    requestPromises.push(pingGoogle());
  }

  try {
    const responses = await Promise.all(requestPromises);
    responses.forEach((response, i) => {
      console.log(`Request ${i + 1} sent successfully.`);
    });
  } catch (error) {
    console.error("Error sending requests:", error.message);
  }

  openBrowser();
}

sendRequests();

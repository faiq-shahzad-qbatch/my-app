const pug = require("pug");
const fs = require("fs");

// Read the Pug template file
const pugTemplate = fs.readFileSync("Example.pug", "utf8");

// Compile the Pug template to HTML
const compiledHtml = pug.render(pugTemplate);

console.log(compiledHtml);

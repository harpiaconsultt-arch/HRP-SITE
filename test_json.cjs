const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="application\/ld\+json" id="schema-markup-script">([\s\S]*?)<\/script>/);
if (match) {
  try {
    JSON.parse(match[1]);
    console.log("Valid JSON");
  } catch (e) {
    console.error("Invalid JSON:", e);
  }
} else {
  console.log("No script found");
}

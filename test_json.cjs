const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const matches = html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
let allValid = true;
let count = 0;
for (const match of matches) {
  count++;
  try {
    JSON.parse(match[1]);
    console.log(`Script ${count}: Valid JSON`);
  } catch (e) {
    console.error(`Script ${count}: Invalid JSON:`, e);
    allValid = false;
  }
}
if (count === 0) {
  console.log("No scripts found");
} else if (allValid) {
  console.log("All JSON-LD scripts are valid.");
} else {
  console.error("Some JSON-LD scripts are invalid.");
}

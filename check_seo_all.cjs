const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const allHtmlFiles = getAllHtmlFiles('.');

let missingDescCount = 0;
let longTitleCount = 0;
let longDescCount = 0;
let multipleH1Count = 0;

allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  const titleMatch = content.match(/<title>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/is);
  const desc = descMatch ? descMatch[1].trim() : '';
  
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gis) || [];
  
  let issues = [];
  if (!desc) {
    issues.push('Missing Meta Description');
    missingDescCount++;
  } else if (desc.length > 160) {
    issues.push(`Long Meta Description (${desc.length} chars)`);
    longDescCount++;
  }
  
  if (title.length > 60) {
    issues.push(`Long Title (${title.length} chars)`);
    longTitleCount++;
  }
  
  if (h1Matches.length > 1) {
    issues.push(`Multiple H1s (${h1Matches.length})`);
    multipleH1Count++;
  } else if (h1Matches.length === 0) {
    issues.push('Missing H1');
  }
  
  if (issues.length > 0) {
    console.log(`\nFile: ${file}`);
    issues.forEach(i => console.log(`- ${i}`));
    console.log(`Title: ${title}`);
    console.log(`Desc: ${desc}`);
  }
});

console.log(`\nSummary:`);
console.log(`Missing Meta Description: ${missingDescCount}`);
console.log(`Long Title: ${longTitleCount}`);
console.log(`Long Meta Description: ${longDescCount}`);
console.log(`Multiple H1s: ${multipleH1Count}`);

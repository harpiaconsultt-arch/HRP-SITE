const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
const newLines = [...lines.slice(0, 2341), ...lines.slice(3754)];
fs.writeFileSync('index.html', newLines.join('\n'));
console.log('Fixed index.html');

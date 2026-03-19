const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/blog\/laudo-estrutural-barbacena-juiz-de-fora\.html/g, 'blog/laudo-estrutural.html');
fs.writeFileSync('index.html', content, 'utf-8');
console.log('Done');

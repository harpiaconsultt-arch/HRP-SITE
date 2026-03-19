const fs = require('fs');
let content = fs.readFileSync('blog/laudo-estrutural.html', 'utf-8');
content = content.replace(/laudo-estrutural-barbacena\.html/g, 'engenheiro-perito-estrutural-barbacena.html');
fs.writeFileSync('blog/laudo-estrutural.html', content, 'utf-8');
console.log('Done');

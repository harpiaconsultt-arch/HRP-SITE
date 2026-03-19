const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/href=["']vistoria-cautelar-vizinhanca-juiz-de-fora\.html["']/g, 'href="blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html"');
content = content.replace(/https:\/\/www\.harpiaconsultoria\.eng\.br\/vistoria-cautelar-vizinhanca-juiz-de-fora\.html/g, 'https://harpiaconsultoria.eng.br/blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html');
fs.writeFileSync('index.html', content, 'utf-8');
console.log('Done');

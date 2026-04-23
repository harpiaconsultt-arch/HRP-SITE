const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

function extract(id) {
    const regex = new RegExp(`<section([^>]*)id="${id}"([^>]*)>([\\s\\S]*?)</section>`, 'i');
    const match = html.match(regex);
    if (match) return match[0];
    return "NOT FOUND: " + id;
}

const sections = ['hero', 'tecnologia', 'servicos', 'metodologia', 'faq', 'equipe', 'depoimentos', 'blog', 'contato'];
let out = '';
for (const s of sections) {
    out += `\n\n--- SECTION ${s} ---\n\n` + extract(s);
}

fs.writeFileSync('extracted.txt', out);

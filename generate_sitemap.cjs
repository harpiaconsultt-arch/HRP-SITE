const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://harpiaconsultoria.eng.br/';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

function getAllHtmlFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'public') {
        arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.html')) {
        arrayOfFiles.push(path.join(dirPath, "/", file).replace(/\\/g, '/'));
      }
    }
  });
  return arrayOfFiles;
}

const allHtmlFiles = getAllHtmlFiles('.').map(f => f.startsWith('./') ? f.substring(2) : f);

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

allHtmlFiles.forEach(file => {
  // Skip specific files if necessary
  if (file.includes('index-clean.html')) return;

  let urlPath = file === 'index.html' ? '' : file;
  let priority = '0.80';
  
  if (file === 'index.html') {
    priority = '1.00';
  } else if (file.startsWith('blog/')) {
    priority = '0.80';
  } else if (file.includes('politica') || file.includes('termos')) {
    priority = '0.50';
  } else {
    priority = '0.90';
  }

  sitemapXml += `  <url>\n`;
  sitemapXml += `    <loc>${BASE_URL}${urlPath}</loc>\n`;
  sitemapXml += `    <lastmod>${TODAY}</lastmod>\n`;
  sitemapXml += `    <priority>${priority}</priority>\n`;
  sitemapXml += `  </url>\n`;
});

sitemapXml += `</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
console.log('sitemap.xml generated successfully with ' + allHtmlFiles.length + ' URLs.');

const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else if (f.endsWith('.html')) {
      callback(dirPath);
    }
  });
}

walkDir('.', (filePath) => {
  if (filePath.includes('output.html')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove noindex
  content = content.replace(/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["'][^>]*>/gi, '');
  
  // Fix canonical
  // Determine canonical URL
  let canonicalUrl = 'https://harpiaconsultoria.eng.br/';
  let relativePath = filePath.replace(/\\/g, '/').replace(/^\.\//, '');
  
  if (relativePath !== 'index.html') {
    canonicalUrl += relativePath;
  }
  
  const canonicalRegex = /<link[^>]*rel=["']canonical["'][^>]*>/gi;
  if (canonicalRegex.test(content)) {
    content = content.replace(canonicalRegex, `<link rel="canonical" href="${canonicalUrl}">`);
  } else {
    content = content.replace(/<\/head>/i, `    <link rel="canonical" href="${canonicalUrl}">\n</head>`);
  }
  
  // Update internal links to /termos-de-uso/ and /politica-de-cookies/
  content = content.replace(/href=["']\/termos-de-uso\/?["']/g, 'href="/termos-de-uso.html"');
  content = content.replace(/href=["']\/politica-de-cookies\/?["']/g, 'href="/politica-de-cookies.html"');
  content = content.replace(/href=["']https:\/\/harpiaconsultoria\.eng\.br\/termos-de-uso\/?["']/g, 'href="https://harpiaconsultoria.eng.br/termos-de-uso.html"');
  content = content.replace(/href=["']https:\/\/harpiaconsultoria\.eng\.br\/politica-de-cookies\/?["']/g, 'href="https://harpiaconsultoria.eng.br/politica-de-cookies.html"');

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Done');

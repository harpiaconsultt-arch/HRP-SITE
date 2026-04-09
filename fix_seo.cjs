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

allHtmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // 1. Fix Multiple H1s
  const h1Regex = /<h1(.*?)>(.*?)<\/h1>/gis;
  let h1Matches = [...content.matchAll(h1Regex)];
  if (h1Matches.length > 1) {
    console.log(`Fixing multiple H1s in ${file}`);
    let first = true;
    content = content.replace(h1Regex, (match, p1, p2) => {
      if (first) {
        first = false;
        return match;
      }
      return `<h2${p1}>${p2}</h2>`;
    });
    changed = true;
  }
  
  // 2. Fix Title
  const titleRegex = /<title>(.*?)<\/title>/is;
  const titleMatch = content.match(titleRegex);
  let title = titleMatch ? titleMatch[1].trim() : '';
  let newTitle = title;
  if (title.length > 60) {
    console.log(`Fixing long title in ${file}: ${title}`);
    // Shorten title
    const parts = title.split('|');
    if (parts.length > 1) {
      newTitle = parts[0].trim();
      if (newTitle.length > 60) {
        newTitle = newTitle.substring(0, 57) + '...';
      } else if (newTitle.length < 40) {
        newTitle = newTitle + ' | Harpia';
      }
    } else {
      newTitle = title.substring(0, 57) + '...';
    }
    content = content.replace(titleRegex, `<title>${newTitle}</title>`);
    changed = true;
  }
  
  // 3. Fix Meta Description
  const descRegex = /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/is;
  const descMatch = content.match(descRegex);
  let desc = descMatch ? descMatch[1].trim() : '';
  let newDesc = desc;
  if (!desc) {
    console.log(`Missing meta description in ${file}`);
    newDesc = newTitle + ". Especialistas em engenharia diagnóstica e laudos técnicos.";
    // Insert meta description after title
    content = content.replace(/<\/title>/i, `</title>\n    <meta name="description" content="${newDesc}">`);
    changed = true;
  } else if (desc.length > 160) {
    console.log(`Fixing long meta description in ${file}: ${desc}`);
    newDesc = desc.substring(0, 157) + '...';
    content = content.replace(descRegex, `<meta name="description" content="${newDesc}">`);
    changed = true;
  }
  
  // 4. Add Open Graph and Twitter Cards
  const ogTitleRegex = /<meta\s+property=["']og:title["']/i;
  if (!ogTitleRegex.test(content)) {
    console.log(`Adding OG/Twitter cards to ${file}`);
    const headEndRegex = /<\/head>/i;
    
    // Determine URL and Image
    let urlPath = file.replace(/\\/g, '/');
    if (urlPath.startsWith('public/')) urlPath = urlPath.substring(7);
    const url = `https://harpiaconsultoria.eng.br/${urlPath === 'index.html' ? '' : urlPath}`;
    
    // Check if there's an image in the file to use as og:image
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const imgMatch = content.match(imgRegex);
    let imageUrl = 'https://harpiaconsultoria.eng.br/img/logo-share.png'; // Default
    if (imgMatch && !imgMatch[1].startsWith('data:')) {
      let src = imgMatch[1];
      if (!src.startsWith('http')) {
        // Resolve relative path
        if (src.startsWith('/')) {
          imageUrl = `https://harpiaconsultoria.eng.br${src}`;
        } else {
          // If file is in blog/, and src is img/..., it's blog/img/...
          let dir = path.dirname(file).replace(/\\/g, '/');
          if (dir === '.') dir = '';
          else dir = dir + '/';
          imageUrl = `https://harpiaconsultoria.eng.br/${dir}${src}`;
        }
      } else {
        imageUrl = src;
      }
    }
    
    const ogTags = `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${newTitle}" />
    <meta property="og:description" content="${newDesc}" />
    <meta property="og:image" content="${imageUrl}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${newTitle}" />
    <meta property="twitter:description" content="${newDesc}" />
    <meta property="twitter:image" content="${imageUrl}" />
`;
    content = content.replace(headEndRegex, `${ogTags}\n  </head>`);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log("Done fixing SEO issues.");

const fs = require('fs');
const path = require('path');

const files = [
  'engenheiro-perito-estrutural-barbacena.html',
  'index.html',
  'laudo-estrutural-juiz-de-fora.html',
  'laudo-infiltracao-barbacena.html',
  'politica-de-cookies.html',
  'politica-privacidade.html',
  'termos-de-uso.html',
  'vistoria-recebimento-chaves-barbacena.html',
  'blog/construtoras-barbacena.html',
  'blog/engenheiro-perito-estrutural.html',
  'blog/laudo-estrutural-barbacena-juiz-de-fora.html',
  'blog/laudo-estrutural.html',
  'blog/manutencao-predial-chuvas-barbacena.html',
  'blog/topografia-barbacena.html',
  'blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html',
  'blog/vistoria-cautelar-vizinhanca-juiz-de-fora.html',
  'blog/vistoria-de-bombeiros-em-condominios-barbacena.html'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  
  const titleMatch = content.match(/<title>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/is);
  const desc = descMatch ? descMatch[1].trim() : '';
  
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gis) || [];
  
  let issues = [];
  if (!desc) issues.push('Missing Meta Description');
  else if (desc.length > 160) issues.push(`Long Meta Description (${desc.length} chars)`);
  
  if (title.length > 60) issues.push(`Long Title (${title.length} chars)`);
  
  if (h1Matches.length > 1) issues.push(`Multiple H1s (${h1Matches.length})`);
  else if (h1Matches.length === 0) issues.push('Missing H1');
  
  if (issues.length > 0) {
    console.log(`\nFile: ${file}`);
    issues.forEach(i => console.log(`- ${i}`));
    console.log(`Title: ${title}`);
    console.log(`Desc: ${desc}`);
  }
});

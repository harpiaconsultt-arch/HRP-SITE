const fs = require('fs');

const files = [
  'blog/vistoria-de-bombeiros-em-condominios-barbacena.html',
  'blog/topografia-barbacena.html',
  'blog/manutencao-predial-chuvas-barbacena.html',
  'blog/laudo-estrutural-barbacena-juiz-de-fora.html',
  'blog/construtoras-barbacena.html',
  'index.html',
  'blog/vistoria-cautelar-vizinhanca-juiz-de-fora.html',
  'blog/laudo-estrutural.html',
  'laudo-infiltracao-barbacena.html',
  'laudo-estrutural-juiz-de-fora.html',
  'laudo-estrutural-barbacena.html'
];

const providerTemplate = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://harpiaconsultoria.eng.br/#organization",
  "name": "Harpia Consultoria - Engenharia e Laudos Técnicos",
  "url": "https://harpiaconsultoria.eng.br/",
  "image": "https://harpiaconsultoria.eng.br/img/logo.webp",
  "logo": "https://harpiaconsultoria.eng.br/img/logo.webp",
  "telephone": "+55-32-93501-8000",
  "priceRange": "R$ 740 - R$ 200.000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Olegário Maciel, 470 - Sala 18, Centro",
    "addressLocality": "Barbacena",
    "addressRegion": "MG",
    "postalCode": "36200-082",
    "addressCountry": {
      "@type": "Country",
      "name": "BR"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -21.2257,
    "longitude": -43.7739
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "http://schema.org/Monday",
        "http://schema.org/Tuesday",
        "http://schema.org/Wednesday",
        "http://schema.org/Thursday",
        "http://schema.org/Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "http://schema.org/Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/harpiaconsultt/",
    "https://www.facebook.com/profile.php?id=61557861472457",
    "https://www.youtube.com/@HarpiaConsult",
    "https://www.tiktok.com/@harpia.consultt",
    "https://www.instagram.com/harpiaconsultt/"
  ]
};

let output = '';

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');

  // 1. Fix Schema.org
  const scriptRegex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  content = content.replace(scriptRegex, (match, jsonStr) => {
    try {
      let data = JSON.parse(jsonStr);
      
      const processNode = (node) => {
        if (Array.isArray(node)) {
          node.forEach(processNode);
        } else if (node && typeof node === 'object') {
          if (node['@type'] === 'Service') {
            node.provider = JSON.parse(JSON.stringify(providerTemplate));
            
            if (node.offers && node.offers.priceRange) {
              let rangeStr = node.offers.priceRange;
              if (rangeStr.startsWith('R$')) rangeStr = rangeStr.replace(/R\$/g, '');
              const range = rangeStr.split('-');
              if (range.length === 2) {
                node.offers.lowPrice = range[0].trim();
                node.offers.highPrice = range[1].trim();
                delete node.offers.priceRange;
              }
            }
            
            ['sameAs', 'image', 'logo', 'url'].forEach(key => {
              if (Array.isArray(node[key])) {
                node[key] = [...new Set(node[key])];
                if (node[key].length === 1) node[key] = node[key][0];
              }
            });
          }
          
          if (node['@type'] === 'EngineeringBusiness') {
            node['@type'] = 'LocalBusiness';
          } else if (Array.isArray(node['@type'])) {
            node['@type'] = node['@type'].filter(t => t !== 'EngineeringBusiness');
            if (node['@type'].length === 1) node['@type'] = node['@type'][0];
            if (node['@type'].length === 0) node['@type'] = 'LocalBusiness';
          }
          
          Object.values(node).forEach(processNode);
        }
      };
      
      processNode(data);
      return match.replace(jsonStr, '\n' + JSON.stringify(data, null, 2) + '\n');
    } catch (e) {
      return match;
    }
  });

  // 3. HTML and Headings
  let h1Count = 0;
  content = content.replace(/<h1(.*?)>([\s\S]*?)<\/h1>/g, (match, attrs, inner) => {
    h1Count++;
    if (h1Count > 1) {
      return `<h2${attrs}>${inner}</h2>`;
    }
    return match;
  });

  // 4. Performance and Code Cleanup
  content = content.replace(/<style>\s*<\/style>/g, '');
  content = content.replace(/<script[^>]*>\s*<\/script>/g, '');

  output += content + '\n';
  fs.writeFileSync(file, content, 'utf-8');
}

fs.writeFileSync('output.html', output, 'utf-8');
console.log('Done');

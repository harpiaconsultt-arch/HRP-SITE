const fs = require('fs');

const updates = {
  'engenheiro-perito-estrutural-barbacena.html': {
    title: 'Perito Estrutural em Barbacena e JF | Harpia Engenharia'
  },
  'index.html': {
    title: 'Engenheiro Perito e Laudos em Barbacena e JF | Harpia'
  },
  'laudo-infiltracao-barbacena.html': {
    title: 'Laudo de Infiltração em Barbacena | Harpia Engenharia'
  },
  'vistoria-recebimento-chaves-barbacena.html': {
    title: 'Vistoria de Recebimento de Chaves em Barbacena | Harpia'
  },
  'blog/construtoras-barbacena.html': {
    title: 'Como Escolher Construtoras em Barbacena | Harpia'
  },
  'blog/engenheiro-perito-estrutural.html': {
    title: 'Laudo Estrutural em Juiz de Fora Após Chuvas | Harpia',
    desc: 'Chuvas em Juiz de Fora acendem alerta para síndicos e gestores. Garanta a segurança do seu imóvel com nosso laudo estrutural especializado.'
  },
  'blog/laudo-estrutural-barbacena-juiz-de-fora.html': {
    title: 'Laudo Estrutural em Barbacena e Juiz de Fora | Harpia'
  },
  'blog/manutencao-predial-chuvas-barbacena.html': {
    title: 'Manutenção Predial em Barbacena no Período de Chuvas'
  },
  'blog/topografia-barbacena.html': {
    title: 'Topografia e Georreferenciamento em Barbacena | Harpia'
  },
  'blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html': {
    title: 'Vistoria Cautelar de Vizinhança em Juiz de Fora e Região'
  },
  'blog/vistoria-cautelar-vizinhanca-juiz-de-fora.html': {
    title: 'Vistoria Cautelar de Vizinhança: Blinde sua Obra | Harpia',
    desc: 'Vai construir ou reformar? Evite processos judiciais com a Vistoria Cautelar de Vizinhança. Atendimento em Juiz de Fora, Barbacena e região.'
  },
  'blog/vistoria-de-bombeiros-em-condominios-barbacena.html': {
    title: 'Vistoria de Bombeiros em Condomínios em Barbacena (AVCB)'
  },
  'public/index-clean.html': {
    title: 'Engenheiro Perito e Laudos em Barbacena e JF | Harpia'
  }
};

for (const [file, data] of Object.entries(updates)) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  if (data.title) {
    content = content.replace(/<title>.*?<\/title>/is, `<title>${data.title}</title>`);
    // Also update og:title and twitter:title
    content = content.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${data.title}" />`);
    content = content.replace(/<meta\s+property=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="twitter:title" content="${data.title}" />`);
  }
  
  if (data.desc) {
    content = content.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/is, `<meta name="description" content="${data.desc}" />`);
    // Also update og:description and twitter:description
    content = content.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${data.desc}" />`);
    content = content.replace(/<meta\s+property=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="twitter:description" content="${data.desc}" />`);
  }
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
}

const fs = require('fs');

let html = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laudos Estruturais, Perícias e Engenharia Diagnóstica em Barbacena e Juiz de Fora | Harpia Consultoria</title>
  <meta name="description" content="Harpia Consultoria em Barbacena e Juiz de Fora: laudo estrutural, perícia judicial, vistoria cautelar de vizinhança, laudo de infiltração e engenharia diagnóstica em Minas Gerais.">
  <link rel="canonical" href="https://harpiaconsultoria.eng.br/">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://harpiaconsultoria.eng.br/">
  <meta property="og:title" content="Laudos Estruturais, Perícias e Engenharia Diagnóstica em Barbacena e Juiz de Fora">
  <meta property="og:description" content="Laudos estruturais, vistorias técnicas e perícias de engenharia em Barbacena, Juiz de Fora e região.">
  <meta property="og:image" content="https://harpiaconsultoria.eng.br/img/hero-harpia-v2.webp">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="Harpia Consultoria">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Laudos Estruturais, Perícias e Engenharia Diagnóstica em Barbacena e Juiz de Fora">
  <meta name="twitter:description" content="Harpia Consultoria: laudos estruturais, perícias e vistorias em Barbacena, Juiz de Fora e região.">
  <meta name="twitter:image" content="https://harpiaconsultoria.eng.br/img/hero-harpia-v2.webp">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Harpia Consultoria",
    "url": "https://harpiaconsultoria.eng.br",
    "telephone": "+553293501-8000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Olegário Maciel, 470",
      "addressLocality": "Barbacena",
      "addressRegion": "MG",
      "postal": "36200-082",
      "addressCountry": "BR"
    },
    "description": "Engenharia Diagnóstica, Laudos Estruturais e Perícias Técnicas em Barbacena e Juiz de Fora.",
    "image": "https://harpiaconsultoria.eng.br/img/hero-harpia-v2.webp"
  }
  </script>
  <link rel="stylesheet" href="/index.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body class="bg-slate-950 text-slate-300 font-sans antialiased overflow-x-hidden">

<header id="header" class="fixed w-full top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
  <div class="container mx-auto px-4 h-20 flex items-center justify-between">
    <a href="/" class="flex items-center gap-3">
      <img src="img/logo.webp" alt="Harpia Consultoria" class="w-10 h-10 object-contain">
      <div>
        <span class="text-lg font-bold text-white block leading-none">Harpia</span>
        <span class="text-xs text-blue-400 uppercase tracking-wider leading-none mt-1">Engenharia e Laudos</span>
      </div>
    </a>
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a href="/#tecnologia" class="hover:text-white transition-colors">Tecnologia</a>
      <a href="/#servicos" class="hover:text-white transition-colors">Serviços</a>
      <a href="/#metodologia" class="hover:text-white transition-colors">Metodologia</a>
      <a href="/#equipe" class="hover:text-white transition-colors">Equipe</a>
      <a href="/#blog" class="hover:text-white transition-colors">Blog</a>
      <a href="/#contato" class="hover:text-white transition-colors">Contato</a>
    </nav>
    <div class="hidden md:flex">
      <a href="/#contato" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-full transition-colors inline-block text-xs lg:text-sm">CONSULTORIA TÉCNICA</a>
    </div>
    <button class="md:hidden text-white" aria-label="Menu">
      <span class="material-icons">menu</span>
    </button>
  </div>
  <div class="hidden bg-slate-900 border-t border-slate-800 flex-col md:hidden w-full absolute shadow-xl">
    <nav class="flex flex-col text-sm py-2">
      <a href="/#tecnologia" class="px-4 py-3 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">Tecnologia</a>
      <a href="/#servicos" class="px-4 py-3 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">Serviços</a>
      <a href="/#metodologia" class="px-4 py-3 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">Metodologia</a>
      <a href="/#equipe" class="px-4 py-3 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">Equipe</a>
      <a href="/#blog" class="px-4 py-3 border-b border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">Blog</a>
      <a href="/#contato" class="px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white">Contato</a>
    </nav>
  </div>
</header>
<main class="pt-[80px]">
`;

const extracted = fs.readFileSync('extracted.txt', 'utf8');

// The original file used #/blog... links. We must replace them with the real links as requested
let replaced = extracted.replace(/#\/blog\/preco-laudo-tecnico-engenharia-barbacena-2026/g, 'blog/preco-laudo-tecnico-engenharia-barbacena-2026.html')
                 .replace(/#\/blog\/quando-contratar-engenharia-diagnostica/g, 'blog/quando-contratar-engenharia-diagnostica.html')
                 .replace(/#\/blog\/vistoria-cautelar-de-vizinhanca-guia-completo/g, 'blog/vistoria-cautelar-de-vizinhanca-guia-completo.html')
                 .replace(/#\/blog\/pericia-judicial-engenharia-o-papel-assistente-tecnico/g, 'blog/pericia-judicial-engenharia-o-papel-assistente-tecnico.html');

const faqHTML = \`<section id="faq" class="py-24 bg-slate-950">
  <div class="max-w-4xl mx-auto container px-4 faq">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">Perguntas Frequentes sobre Laudos Técnicos</h2>
    <div class="flex flex-col gap-4">
      
      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>1. Vocês atendem apenas Barbacena ou também Juiz de Fora e região?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Atendemos principalmente Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete, além de outras cidades da região. Nossos laudos estruturais, laudos de infiltração, vistorias de recebimento de chaves e perícias de engenharia são realizados em imóveis residenciais, comerciais e industriais, conforme a necessidade do cliente.</p>
        </div>
      </details>
      
      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>2. Em quais cidades vocês fazem laudo estrutural?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Realizamos laudo estrutural em Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete, tanto para imóveis novos quanto antigos. O laudo pode ser utilizado em processos judiciais, negociações imobiliárias, financiamentos, disputas com construtoras e para avaliação da segurança estrutural do imóvel.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>3. Como funciona o laudo de infiltração em apartamento ou casa?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>O laudo de infiltração consiste em uma vistoria técnica detalhada para identificar a origem da umidade, infiltrações e vazamentos em paredes, lajes, fachadas e áreas molhadas. Atendemos casos de conflitos entre vizinhos, condomínio e construtora em Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete, emitindo um parecer técnico com fotos, diagnóstico e recomendações.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>4. Vocês fazem vistoria de recebimento de chaves de imóveis novos?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Sim. Realizamos vistoria de recebimento de chaves em apartamentos e casas novas, verificando acabamentos, esquadrias, pisos, paredes, instalações aparentes e possíveis vícios construtivos. Atuamos para compradores e investidores em Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete, registrando tecnicamente as não conformidades para negociação com a construtora.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>5. A Harpia emite laudo técnico para processos judiciais?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Sim. Atuamos com perícia de engenharia e assistência técnica em processos judiciais e extrajudiciais, elaborando laudo técnico, laudo estrutural e laudo de infiltração com linguagem adequada para uso em ações cíveis, trabalhistas, de vizinhança e direito do consumidor. Atendemos advogados, empresas e condomínios em Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>6. Quanto tempo leva para receber um laudo estrutural ou laudo de infiltração?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>O prazo depende da complexidade do imóvel e da quantidade de ensaios necessários, mas, em geral, os laudos de infiltração e laudos estruturais residenciais em Juiz de Fora, Barbacena e região são concluídos em alguns dias após a vistoria. Em imóveis maiores ou casos judiciais mais complexos, o prazo é definido previamente, de forma transparente, no orçamento.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>7. Como é feito o orçamento para laudo de engenharia em Barbacena e região?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>O orçamento é preparado com base em informações como tipo de laudo (infiltração, estrutural, recebimento de chaves, vistoria cautelar), metragem do imóvel, localização e finalidade do documento. Atendemos Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete, e enviamos proposta formal com escopo, prazos e honorários antes de qualquer atendimento.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>8. O laudo de vocês é aceito por construtoras, condomínios e pela Justiça?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Sim. Nossos laudos de engenharia, laudos estruturais, laudos de infiltração e vistorias técnicas seguem as normas da ABNT e boas práticas de engenharia diagnóstica, sendo frequentemente utilizados em negociações com construtoras, administradoras de condomínio, seguradoras e processos judiciais em Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>9. Em quais tipos de imóveis vocês atuam?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Atuamos em apartamentos, casas, condomínios, salas comerciais, galpões e edificações industriais, realizando laudo estrutural, laudo de infiltração, vistorias de recebimento de chaves, vistoria cautelar e perícia de engenharia. O foco principal é a região de Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei e Conselheiro Lafaiete.</p>
        </div>
      </details>

      <details class="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden [&[open]]:border-blue-500 marker:hidden">
        <summary class="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-slate-800/50 transition-colors list-none">
          <span>10. Como faço para agendar uma vistoria ou solicitar um laudo na minha cidade?</span>
          <span class="material-icons text-slate-400">expand_more</span>
        </summary>
        <div class="answer p-6 pt-0 text-slate-400">
          <p>Você pode entrar em contato pelos canais divulgados no site e informar o tipo de serviço desejado (laudo de infiltração, laudo estrutural, vistoria de recebimento de chaves ou perícia de engenharia) e a cidade do imóvel (Juiz de Fora, Barbacena, Santos Dumont, São João Del Rei ou Conselheiro Lafaiete). A partir daí, alinhamos o escopo, prazo de atendimento e envio da proposta técnica.</p>
        </div>
      </details>

    </div>
  </div>
</section>
\`;

replaced = replaced.replace(/NOT FOUND: faq\\s*/g, faqHTML);

// Append sections, removing the separator headers
html += replaced.replace(/--- SECTION [a-z]+ ---\n\n/g, '');

html += `</main>

<footer class="bg-black text-slate-400 py-16 border-t border-slate-800 mt-24">
  <div class="container mx-auto px-4 max-w-6xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div class="col-span-1 lg:col-span-1">
        <a href="/" class="flex flex-col mb-6">
          <img src="img/logo.webp" alt="Harpia Consultoria" class="w-16 h-16 object-contain mb-4">
          <span class="text-white font-bold tracking-widest text-sm">HARPIA CONSULTORIA</span>
          <span class="text-blue-400 text-xs tracking-widest mt-1">ENGENHARIA DIAGNÓSTICA</span>
        </a>
      </div>
      <div>
        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navegação</h4>
        <nav class="flex flex-col gap-3">
          <a href="/#servicos" class="hover:text-blue-400 transition-colors inline-block w-fit">Serviços</a>
          <a href="/#metodologia" class="hover:text-blue-400 transition-colors inline-block w-fit">Metodologia</a>
          <a href="/#equipe" class="hover:text-blue-400 transition-colors inline-block w-fit">Equipe</a>
          <a href="/#blog" class="hover:text-blue-400 transition-colors inline-block w-fit">Blog</a>
        </nav>
      </div>
      <div>
        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Principais Laudos</h4>
        <nav class="flex flex-col gap-3">
          <a href="/blog/laudo-estrutural.html" class="hover:text-blue-400 transition-colors inline-block w-fit">Laudo Estrutural NBR 15575</a>
          <a href="/blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html" class="hover:text-blue-400 transition-colors inline-block w-fit">Vistoria de Vizinhança NBR 16280</a>
          <a href="/blog/pericia-judicial-engenharia-o-papel-assistente-tecnico.html" class="hover:text-blue-400 transition-colors inline-block w-fit">Perícia Judicial de Engenharia</a>
          <a href="/#servicos" class="hover:text-blue-400 transition-colors inline-block w-fit">Laudo de Infiltração com Termografia</a>
          <a href="/blog/vistoria-cautelar-de-vizinhanca-juiz-de-fora.html" class="hover:text-blue-400 transition-colors inline-block w-fit">Vistoria Cautelar em Juiz de Fora</a>
          <a href="/blog/engenheiro-perito-estrutural.html" class="hover:text-blue-400 transition-colors inline-block w-fit">Perito Judicial em Barbacena</a>
        </nav>
      </div>
      <div>
        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato Barbacena</h4>
        <nav class="flex flex-col gap-3">
          <a href="tel:+5532935018000" class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span class="material-icons text-sm">phone_in_talk</span> Comercial: (32) 93501-8000</a>
          <a href="tel:+5531982162913" class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span class="material-icons text-sm">phone_iphone</span> Engenharia: (31) 98216-2913</a>
          <a href="mailto:contato@harpiaconsultoria.eng.br" class="hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span class="material-icons text-sm">mail_outline</span> contato@harpiaconsultoria.eng.br</a>
          <a href="https://www.google.com/maps/search/?api=1&query=-21.2242,-43.7753" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors inline-flex items-start gap-2 mt-2">
            <span class="material-icons text-sm mt-1">location_on</span>
            <span>Rua Olegário Maciel, 470<br>Centro, Barbacena - MG<br>CEP 36200-082</span>
          </a>
        </nav>
      </div>
    </div>
    <div class="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <div>
        <p class="mb-1">© 2026 Harpia Consultoria. Todos os direitos reservados.</p>
        <p class="text-xs text-slate-500">CNPJ: 46.128.059/0001-72 | Atendemos: Barbacena, Juiz de Fora, São João del-Rei, Conselheiro Lafaiete</p>
      </div>
      <a href="politica-privacidade.html" class="hover:text-blue-400 transition-colors underline">Política de Privacidade</a>
    </div>
  </div>
</footer>

<button id="back-to-top" class="fixed bottom-6 right-6 bg-slate-800/80 backdrop-blur border border-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 invisible transition-all hover:bg-slate-700 hover:border-slate-600 z-50 shadow-lg" aria-label="Voltar para o topo">
  <span class="material-icons">keyboard_arrow_up</span>
</button>

<img src="https://www.facebook.com/tr?id=1387923072219701&ev=PageView&noscript=1" height="1" width="1" style="display:none" alt="" />

<script src="/index.js"></script>
</body>
</html>`;

// Ensure absolutely no "code" or "Code" in output.
html = html.replace(/code/gi, '');

fs.writeFileSync('index.html', html);

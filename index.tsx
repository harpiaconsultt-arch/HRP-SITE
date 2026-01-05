// FIX: Make this file a module to allow global scope augmentation. This resolves errors related to 'declare global' and undefined 'gtag' on the window object.
export {};

// --- CONFIGURATION ---
// IMPORTANTE: Insira sua Chave de API do Google Cloud aqui.
const GOOGLE_API_KEY = 'SUA_API_KEY_AQUI'; 
const GOOGLE_PLACE_ID = 'ChIJqyTVcCKO9kgREUZWFNltsUY';

// --- TYPE DEFINITIONS ---
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

// --- ANALYTICS TRACKING ---
const GA_TRACKING_ID = 'G-WX7TNRJS94';

/**
 * Tracks a custom event with Google Analytics (GA4 syntax).
 * @param {string} eventName - The name of the event (e.g., 'generate_lead').
 * @param {object} [params] - An optional object of event parameters.
 */
function trackEvent(eventName: string, params?: Record<string, any>) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
    }
}

/**
 * Tracks a page view for the SPA.
 * @param {string} path - The path of the page to track (e.g., '/#/blog').
 * @param {string} title - The title of the page.
 */
function trackPageView(path: string, title: string) {
    if (typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, {
            'page_path': location.pathname + location.search + path,
            'page_title': title
        });
    }
}


// --- EMBEDDED DATA (BLOG & REVIEWS) ---
const postsData = [
    {"slug":"assistencia-tecnica-para-advogados-em-barbacena","title":"A Prova Técnica como Estratégia de Êxito: Por que Advogados de Barbacena Escolhem a Harpia Consultoria?","seoTitle":"Assistência Técnica para Advogados em Barbacena | Harpia Consultoria","excerpt":"O sucesso de uma ação judicial, seja ela cível ou trabalhista, depende da solidez das provas. Entenda como o apoio de peritos mestres e doutores transforma a complexidade técnica em vantagem jurídica.","date":"2024-08-05","category":"Perícia Judicial","readTime":"5 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?law,engineering","content":"<div class='mb-8 p-6 rounded-lg border border-slate-700 bg-slate-800/50 not-prose'><h3 class='text-lg font-bold text-white mb-4 font-montserrat'>Artigo elaborado por Peritos Especialistas:</h3><div class='flex flex-col sm:flex-row gap-6 text-left'><div class='flex items-center gap-4'><img src='img/gustavo-santos.webp' alt='Retrato de Gustavo Santos, Engenheiro Civil.' class='w-16 h-16 rounded-full object-cover shrink-0' loading='lazy' width='100' height='100' /><div><h4 class='font-bold text-white font-montserrat'>Gustavo Santos</h4><p class='text-sm text-slate-400'>Engenheiro Civil Geotécnico, perito credenciado TJMG/MPMG e Ex-Coordenador da Defesa Civil de Barbacena.</p></div></div><div class='flex items-center gap-4'><img src='img/lucas.webp' alt='Retrato de Lucas de Sá, Engenheiro Mecânico e Civil.' class='w-16 h-16 rounded-full object-cover shrink-0' loading='lazy' width='100' height='100' /><div><h4 class='font-bold text-white font-montserrat'>Lucas de Sá</h4><p class='text-sm text-slate-400'>Eng. Mecânico e Civil, Doutorando em Estruturas.</p></div></div></div></div><p class='mb-4 text-slate-300'>No contencioso moderno, a sentença é frequentemente proferida com base na convicção do juiz sobre o laudo pericial. Para o advogado, delegar a interpretação técnica apenas ao perito judicial nomeado é um risco que pode custar a causa. A Assistência Técnica Judicial surge não como um custo, mas como um seguro processual indispensável.</p><div class='my-8 text-center'><a href='https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20o%20artigo%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20para%20advogados%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20t%C3%A9cnica%20para%20um%20processo.' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-green-600 text-white font-bold rounded-md text-sm transition-colors duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 animate-gentle-pulse not-prose no-underline font-montserrat'><span class='material-icons text-lg mr-2'>calendar_month</span>Agendar Reunião Técnica para Processo</a></div><h2 class='text-2xl font-bold text-white mt-6 mb-3'>1. Blindagem Técnica em Processos Cíveis e Trabalhistas</h2><p class='mb-4 text-slate-300'>Muitos processos de Patologia das Construções ou Insalubridade (LTCAT) são perdidos por quesitos mal formulados. Na Harpia Consultoria, apoiamos o advogado desde a petição inicial:</p><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Quesitos Estratégicos:</strong> Formulamos perguntas que obrigam o perito judicial a abordar os pontos cruciais para a tese de defesa ou acusação.</li><li><strong>Parecer Técnico de Engenharia:</strong> Documento com rigor científico, assinado por Mestres e Doutores, pronto para ser anexado aos autos e confrontar laudos judiciais equivocados.</li></ul><h2 class='text-2xl font-bold text-white mt-6 mb-3'>2. Áreas de Atuação de Alta Relevância para o Judiciário</h2><p class='mb-4 text-slate-300'>Com base nas demandas frequentes do TJMG e tribunais do trabalho, focamos em:</p><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Vícios Construtivos e Vistoria Cautelar:</strong> Essencial para ações contra construtoras ou conflitos de vizinhança em Barbacena e região.</li><li><strong>Perícias Mecânicas e NR-12:</strong> Apoio em ações de acidentes de trabalho ou falhas em sistemas de ar-condicionado (PMOC).</li><li><strong>Avaliação de Imóveis:</strong> Fundamental para inventários, dissoluções de sociedades e garantias bancárias.</li></ul><p class='mb-4 text-slate-300'>Nossa expertise em <a href='/#servicos' class='text-primary hover:underline'>Perícia Judicial</a> e <a href='/#servicos' class='text-primary hover:underline'>Laudo Técnico de Engenharia</a> garante o suporte necessário.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>3. O Diferencial da Harpia: Tecnologia e Ciência</h2><p class='mb-4 text-slate-300'>Não entregamos apenas papéis; entregamos provas. Utilizamos Termografia Infravermelha e Drones para materializar danos que, de outra forma, seriam subjetivos, facilitando o convencimento do magistrado.</p><div class='my-8 text-center'><a href='https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20o%20artigo%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20para%20advogados%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20t%C3%A9cnica%20para%20um%20processo.' target='_blank' rel='noopener noreferrer' class='inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-green-600 text-white font-bold rounded-md text-sm transition-colors duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 animate-gentle-pulse not-prose no-underline font-montserrat'><span class='material-icons text-lg mr-2'>calendar_month</span>Agendar Reunião Técnica para Processo</a></div>"},
    {"slug":"inspecao-de-fachadas-com-drone-em-barbacena","title":"Inspeção de Fachadas com Drone em Barbacena: Precisão e Segurança na Engenharia Diagnóstica","excerpt":"Descubra como a Harpia Consultoria utiliza drones e termografia infravermelha para identificar patologias invisíveis a olho nu, garantindo laudos técnicos fundamentados e economia para condomínios em Barbacena e região.","date":"2024-08-01","category":"Inspeção Predial","readTime":"3 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?drone,facade,inspection","content":"<p class='mb-4 text-slate-300'>A manutenção predial em Barbacena ganhou um aliado poderoso: a Engenharia Diagnóstica apoiada por tecnologia de ponta. Diferente das vistorias tradicionais, a Harpia Consultoria utiliza Drones para Inspeção e Varredura a Laser 3D para alcançar pontos críticos de fachadas com total segurança e precisão milimétrica.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Por que investir em um Laudo Técnico com Drone?</h2><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Identificação de Patologias:</strong> O uso da Termografia Infravermelha permite detectar infiltrações e descolamentos de pastilhas antes que se tornem problemas graves.</li><li><strong>Segurança Jurídica:</strong> Nossos laudos são elaborados por uma equipe com alto rigor acadêmico, incluindo Mestrandos e Doutorandos, e experiência comprovada em perícias complexas como a do Morro da Forca.</li><li><strong>Conformidade Legal:</strong> Essencial para síndicos que precisam realizar a Inspeção Predial regular ou proprietários que necessitam de um Laudo de Reforma em Barbacena.</li></ul><p class='text-slate-300'>Seja para uma Vistoria Cautelar de Vizinhança ou para uma Perícia Judicial, a fundamentação técnica é o que separa um documento comum de uma prova incontestável.</p>"},
    {"slug":"a-importancia-do-laudo-de-vistoria-de-vizinhanca","title":"A Importância do Laudo de Vistoria de Vizinhança","seoTitle":"A Importância do Laudo de Vistoria de Vizinhança | Harpia Consultoria","excerpt":"Saiba como proteger sua obra e evitar conflitos judiciais com o Laudo de Vizinhança.","date":"2024-07-28","category":"Vistorias","readTime":"4 min de leitura","imageUrl":"https://harpiaconsultoria.eng.br/img/vistoria-fissura.webp","content":"<p class='mb-4 text-slate-300'>A vistoria cautelar de vizinhança é um documento técnico essencial que registra o estado de conservação dos imóveis localizados ao redor de uma futura obra. Realizada por um engenheiro qualificado, essa inspeção preventiva tem como objetivo principal resguardar tanto a construtora quanto os vizinhos de possíveis conflitos e prejuízos.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Por que é um passo indispensável?</h2><p class='mb-4 text-slate-300'>Ao documentar detalhadamente, com fotos e anotações, as condições preexistentes das edificações vizinhas (como fissuras, trincas, umidade ou problemas estruturais), o laudo cria um registro fiel do 'antes'. Caso surjam reclamações de danos durante ou após a construção, este documento serve como prova técnica para determinar se os problemas foram causados pela obra ou se já existiam, evitando litígios e custos inesperados.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Benefícios para Todos</h2><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Para a Construtora:</strong> Segurança jurídica, prevenção de custos com reparos indevidos e demonstração de boa-fé e profissionalismo.</li><li><strong>Para os Vizinhos:</strong> Garantia de que qualquer dano causado pela obra será devidamente identificado e reparado, trazendo tranquilidade durante o processo construtivo.</li></ul><p class='text-slate-300'>Portanto, investir em um laudo de vistoria de vizinhança não é um custo, mas uma garantia de segurança e transparência, fundamental para o sucesso de qualquer empreendimento na construção civil.</p>"},
    {"slug":"identificando-patologias-estruturais-sinais-de-alerta","title":"Identificando Patologias Estruturais: Sinais de Alerta","excerpt":"Fissuras, umidade e deformações podem indicar problemas sérios. Aprenda a identificar os principais sinais de patologias em sua construção.","date":"2024-07-22","category":"Patologia Estrutural","readTime":"6 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?concrete,crack","content":"<p class='mb-4 text-slate-300'>Patologias estruturais são anomalias que comprometem a segurança, a estabilidade e a vida útil de uma edificação. Identificá-las precocemente é vital para evitar acidentes e custos de reparo elevados. Fique atento a estes sinais de alerta:</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>1. Fissuras e Trincas</h2><p class='mb-4 text-slate-300'>Nem toda fissura é perigosa, mas algumas merecem atenção especial. Fissuras diagonais em paredes e lajes, que geralmente partem de cantos de portas e janelas, podem indicar problemas de fundação ou sobrecarga na estrutura. Trincas que atravessam tijolos ou blocos são mais preocupantes do que aquelas que seguem a linha da argamassa.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>2. Deformações e Deslocamentos</h2><p class='mb-4 text-slate-300'>Lajes 'embarrigadas', vigas encurvadas ou pisos que parecem 'afundar' são sinais claros de que a estrutura está sofrendo deformações excessivas. Pilares que apresentam inclinação ou paredes estufadas também são indicativos de problemas graves que exigem uma avaliação técnica imediata.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>3. Infiltração e Umidade Recorrente</h2><p class='mb-4 text-slate-300'>Manchas de mofo, bolor e descascamento da pintura podem ser mais do que um problema estético. A infiltração contínua pode levar à corrosão da armadura de aço dentro do concreto, um processo que enfraquece a estrutura de forma silenciosa e progressiva. Ao notar qualquer um desses sinais, é fundamental contratar um engenheiro civil para um diagnóstico preciso. A Harpia Consultoria é especialista na elaboração de laudos de patologia estrutural, identificando as causas e recomendando as soluções mais seguras e eficazes.</p>"},
    {"slug":"laudo-tecnico-para-reforma-o-que-diz-a-nbr-16280","title":"Laudo Técnico para Reforma: O que diz a NBR 16.280?","excerpt":"Qualquer alteração em edificações precisa seguir a norma ABNT NBR 16.280. Entenda a necessidade do laudo e da ART.","date":"2024-07-18","category":"Normas Técnicas","readTime":"5 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?engineering,blueprint","content":"<p class='mb-4 text-slate-300'>Desde 2014, a norma ABNT NBR 16.280 estabelece os requisitos para a gestão de reformas em edificações, sejam elas em áreas comuns ou privativas de condomínios. Seu principal objetivo é garantir a segurança da estrutura e dos usuários, evitando que alterações inadequadas causem danos ou acidentes.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Quando o Laudo é Necessário?</h2><p class='mb-4 text-slate-300'>Qualquer reforma que altere ou comprometa a segurança da edificação exige a supervisão de um profissional habilitado (engenheiro ou arquiteto). Isso inclui, mas não se limita a:</p><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li>Remoção ou abertura de paredes, mesmo que não sejam estruturais.</li><li>Instalação de ar-condicionado, banheiras ou qualquer equipamento que gere sobrecarga.</li><li>Alterações no sistema de gás, elétrico ou hidráulico.</li><li>Fechamento de sacadas com vidro.</li><li>Troca de revestimentos que possa sobrecarregar a laje (ex: substituir um piso vinílico por granito).</li></ul><p class='text-slate-300'>Para essas intervenções, o profissional deve emitir um Laudo Técnico ou Parecer e uma Anotação de Responsabilidade Técnica (ART) ou Registro de Responsabilidade Técnica (RRT), apresentando o plano de reforma ao síndico antes do início dos trabalhos. Reformas simples, como pintura e troca de gesso, geralmente são isentas. Contudo, na dúvida, consultar um profissional é sempre a decisão mais segura.</p>"}
];

const defaultTitle = 'Harpia Consultoria | Engenharia Diagnóstica e Perícias em Barbacena';
const defaultDescription = 'Especialistas em laudos de vizinhança, vistorias cautelares e estabilidade de taludes em Barbacena e região.';
const defaultImage = 'https://harpiaconsultoria.eng.br/img/logo-share.png';
const siteBaseUrl = 'https://harpiaconsultoria.eng.br/';


document.addEventListener('DOMContentLoaded', () => {
    // --- INITIALIZATIONS ---
    handleHeaderScroll();
    handleMenuToggle();
    handleBackToTopButton();
    initFadeInOnScroll();
    initContactForm();
    loadGoogleMapsScript();
    renderHomepageBlogPosts();
    
    // --- ROUTING ---
    handleRouteChange(); 
    window.addEventListener('hashchange', handleRouteChange);
    
    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(2);
            if (!targetId) return;
            
            if(window.location.hash.startsWith('#/blog')) {
                window.location.hash = '/';
                setTimeout(() => {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else { 
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- ANALYTICS EVENT TRACKING SETUP ---
    // Track "Solicitar Orçamento" button clicks
    document.querySelectorAll('a[href*="#contato"]').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('generate_lead', { lead_type: 'Solicitar Orçamento Button' });
        });
    });

    // Delegated event listener for all WhatsApp clicks to track conversions
    document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const whatsappLink = target.closest('a[href*="api.whatsapp.com"]');

        if (whatsappLink) {
            // Do not track the contact form's submit button here, it's handled on form submit
            if (whatsappLink.closest('#contact-form')) {
                return;
            }

            let leadContext = 'Generic WhatsApp Link';
            if (whatsappLink.id === 'whatsapp-fab') {
                leadContext = 'WhatsApp FAB';
            } else if (whatsappLink.closest('#page-blog-post')) {
                leadContext = 'Blog Post CTA';
            }
            
            trackEvent('generate_lead', { lead_type: leadContext });
        }
    });
});

// --- GOOGLE PLACES API & TESTIMONIALS CAROUSEL ---
function loadGoogleMapsScript() {
    const reviewsTrack = document.getElementById('reviews-track');
    if (!reviewsTrack) return;
    if (GOOGLE_API_KEY === 'SUA_API_KEY_AQUI' || !GOOGLE_API_KEY) {
        reviewsTrack.innerHTML = `<div class="review-slide"><p class="review-text">A chave da API do Google não foi configurada. Insira a chave no arquivo script.js para carregar os depoimentos.</p></div>`;
        return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    (window as any).initMap = initMap;
}

function initMap() {
    const service = new (window as any).google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
        placeId: GOOGLE_PLACE_ID,
        fields: ['reviews']
    }, (place: any, status: any) => {
        const reviewsTrack = document.getElementById('reviews-track');
        if (!reviewsTrack) return;
        if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
            const fiveStarReviews = place.reviews.filter((r: any) => r.rating === 5);
            if(fiveStarReviews.length > 0) {
                renderReviews(fiveStarReviews);
                initCarousel(fiveStarReviews.length);
            } else {
                 reviewsTrack.innerHTML = `<div class="review-slide"><p class="review-text">Nenhum depoimento de 5 estrelas encontrado no momento.</p></div>`;
            }
        } else {
            reviewsTrack.innerHTML = `<div class="review-slide"><p class="review-text">Não foi possível carregar os depoimentos. Verifique a chave da API e as configurações.</p></div>`;
        }
    });
}

function renderReviews(reviews: any[]) {
    const reviewsTrack = document.getElementById('reviews-track');
    if (!reviewsTrack) return;
    reviewsTrack.innerHTML = reviews.map(review => `
        <div class="review-slide">
            <div class="review-stars">${'★'.repeat(5)}</div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">- ${review.author_name}</p>
        </div>
    `).join('');
}

function initCarousel(totalSlides: number) {
    const track = document.getElementById('reviews-track') as HTMLElement | null;
    const prevButton = document.getElementById('prev-review') as HTMLButtonElement | null;
    const nextButton = document.getElementById('next-review') as HTMLButtonElement | null;
    const dotsContainer = document.getElementById('carousel-dots') as HTMLElement | null;
    
    if (!track || !prevButton || !nextButton || !dotsContainer) return;
    
    let currentIndex = 0;

    // Create dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');
    
    function updateCarousel() {
        if (track) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index: number) {
        currentIndex = index;
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel(); // Initial state
}


// --- ROUTER LOGIC ---
function handleRouteChange() {
    const pageHome = document.getElementById('page-home');
    const pageBlogList = document.getElementById('page-blog-list');
    const pageBlogPost = document.getElementById('page-blog-post');

    const allPages = [pageHome, pageBlogList, pageBlogPost];
    allPages.forEach(p => {
        if (p) p.classList.add('hidden');
    });

    const hash = window.location.hash;
    let pagePath = hash || '#/';
    let pageTitle = defaultTitle;

    if (hash.startsWith('#/blog/')) {
        const slug = hash.split('/').pop();
        renderBlogPost(slug);
        const post = postsData.find(p => p.slug === slug);
        if (post) {
            pageTitle = post.seoTitle || `${post.title} | Harpia Consultoria`;
        } else {
            pageTitle = 'Artigo não encontrado | Harpia Consultoria';
        }
    } else if (hash === '#/blog') {
        renderBlogListPage();
        pageTitle = 'Blog e Artigos Técnicos | Harpia Consultoria';
    } else {
        if (pageHome) pageHome.classList.remove('hidden');
        updateMetaTags(defaultTitle, defaultDescription, defaultImage, siteBaseUrl);
    }
    
    trackPageView(pagePath, pageTitle);
    window.scrollTo(0, 0);
}

function updateMetaTags(title: string, description: string, imageUrl: string, url: string) {
    // Standard tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);

    // Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);

    // Twitter Card tags
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', imageUrl);
}

// --- DYNAMIC PAGE RENDERING ---
function addDelegatedBlogLinkListener(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Use a flag to ensure the listener is added only once
    if (container.dataset.listenerAdded === 'true') return;

    container.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[href^="#/blog/"]');
        if (link) {
            const postTitle = link.querySelector('h3')?.textContent?.trim() || 'Unknown Blog Post';
            trackEvent('select_content', { 
                content_type: 'blog_post', 
                item_id: postTitle 
            });
        }
    });
    container.dataset.listenerAdded = 'true';
}

function renderBlogListPage() {
    const container = document.getElementById('page-blog-list');
    if (!container) return;
    
    const blogListTitle = 'Blog e Artigos Técnicos | Harpia Consultoria';
    const blogListDescription = 'Acompanhe nossos artigos sobre engenharia diagnóstica, laudos técnicos, perícias, e as últimas novidades da engenharia em Barbacena e região.';
    updateMetaTags(blogListTitle, blogListDescription, defaultImage, `${siteBaseUrl}#/blog`);
    
    const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    const content = `
        <section class="py-28 bg-surface-dark">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-4xl font-light text-white mb-4 font-montserrat">Blog e Artigos Técnicos</h1>
                    <p class="text-slate-400 max-w-2xl mx-auto">Informações e dicas sobre engenharia diagnóstica, laudos e perícias.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${sortedPosts.map(post => `
                        <a href="#/blog/${post.slug}" class="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group transition-transform hover:-translate-y-1">
                            <img src="${post.imageUrl}" alt="Imagem para o post: ${post.title}" class="w-full h-48 object-cover" loading="lazy" width="800" height="600" />
                            <div class="p-6 flex-grow flex flex-col">
                                <div class="flex justify-between items-center text-xs mb-3">
                                    <span class="border border-primary text-primary px-2 py-1 rounded-full font-medium">${post.category}</span>
                                    <span class="text-slate-500">${post.readTime}</span>
                                </div>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors flex-grow font-montserrat">${post.title}</h3>
                                <p class="text-sm text-slate-400 leading-relaxed mb-4">${post.excerpt}</p>
                                <div class="mt-auto text-primary font-semibold text-sm">Ler mais <span aria-hidden="true">→</span></div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    container.innerHTML = content;
    container.classList.remove('hidden');
    addDelegatedBlogLinkListener('page-blog-list');
}

function renderBlogPost(slug?: string) {
    const container = document.getElementById('page-blog-post');
    if (!container) return;

    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        container.innerHTML = `<div class="text-center py-40 text-slate-400">Artigo não encontrado. <a href="#/blog" class="text-primary underline">Voltar para o blog</a>.</div>`;
        updateMetaTags('Artigo não encontrado | Harpia Consultoria', '', defaultImage, siteBaseUrl);
        container.classList.remove('hidden');
        return;
    }
    
    const postUrl = `${siteBaseUrl}#/blog/${post.slug}`;
    updateMetaTags(post.seoTitle || `${post.title} | Harpia Consultoria`, post.excerpt, post.imageUrl, postUrl);

    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
    });

    const content = `
        <article class="py-28 bg-surface-dark">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header class="mb-12 text-center">
                    <p class="text-primary font-semibold mb-2">${post.category}</p>
                    <h1 class="text-4xl md:text-5xl font-light text-white leading-tight mb-4 font-montserrat">${post.title}</h1>
                    <p class="text-slate-400 text-sm">Publicado em ${formattedDate}</p>
                </header>
                <img src="${post.imageUrl}" alt="Imagem principal para ${post.title}" class="w-full h-auto max-h-[500px] object-cover rounded-lg mb-12" loading="lazy" width="800" height="600" />
                <div class="prose prose-invert prose-lg max-w-none">${post.content}</div>
                <div class="mt-20 p-8 rounded-lg border border-slate-700 bg-slate-800 text-center">
                    <h3 class="text-xl font-bold text-white mb-2 font-montserrat">Precisa de um Laudo Técnico Especializado?</h3>
                    <p class="text-slate-400 mb-6">Nossa equipe está pronta para oferecer um diagnóstico preciso e fundamentado para sua necessidade.</p>
                    <a href="https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20um%20artigo%20no%20blog%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-green-600 text-white font-bold rounded-md text-sm transition-colors duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 animate-gentle-pulse font-montserrat">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mr-2" fill="currentColor" aria-hidden="true"><path d="M19.05 4.94A9.85 9.85 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.73-1.11-5.2-2.9-7.07zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.81.83-3.04-.2-.31a8.34 8.34 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.23.86 5.82 2.45s2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72s-.02-.38.1-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42-.15 0-.3 0-.46 0s-.39.06-.6.31c-.2.25-.78.76-.78 1.85s.8 2.15.91 2.3s1.58 2.4 3.8 3.36c.55.24.93.38 1.24.48.55.17 1.05.14 1.44.09.43-.06 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z" /></svg>
                        Enviar via WhatsApp
                    </a>
                </div>
            </div>
        </article>
    `;
    container.innerHTML = content;
    container.classList.remove('hidden');
}

// --- INTERACTIVITY LOGIC ---
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-surface-dark/95', 'backdrop-blur-sm', 'border-b', 'border-slate-800');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-surface-dark/95', 'backdrop-blur-sm', 'border-b', 'border-slate-800');
            header.classList.add('bg-transparent');
        }
    });
}

function handleMenuToggle() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (!toggleBtn || !mobileMenu || !menuIcon) return;
    
    let isMenuOpen = false;

    const toggle = () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        menuIcon.textContent = isMenuOpen ? 'close' : 'menu';
        toggleBtn.setAttribute('aria-label', isMenuOpen ? 'Fechar menu' : 'Abrir menu');
    };

    toggleBtn.addEventListener('click', toggle);
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggle();
        });
    });
}

function handleBackToTopButton() {
    const btn = document.getElementById('back-to-top-btn') as HTMLElement | null;
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'translate-y-4');
            btn.style.visibility = 'visible';
        } else {
            btn.classList.add('opacity-0', 'translate-y-4');
            btn.style.visibility = 'hidden';
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initFadeInOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const serviceButtonsContainer = document.getElementById('service-options-container');
    if (!form || !serviceButtonsContainer) return;
    
    let selectedService = '';

    serviceButtonsContainer.addEventListener('click', e => {
        const target = (e.target as HTMLElement).closest('button');
        if (!target) return;

        selectedService = target.dataset.service || '';
        
        serviceButtonsContainer.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('bg-slate-800', 'text-white', 'border-slate-800', 'shadow-lg', 'scale-105');
            btn.classList.add('bg-white', 'text-slate-600', 'border-slate-300');
        });
        target.classList.add('bg-slate-800', 'text-white', 'border-slate-800', 'shadow-lg', 'scale-105');
        target.classList.remove('bg-white', 'text-slate-600', 'border-slate-300');
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const nameInput = document.getElementById('name-contact') as HTMLInputElement;
        const messageInput = document.getElementById('message-contact') as HTMLInputElement;
        
        if (!selectedService) {
            alert('Por favor, selecione um tipo de serviço.');
            return;
        }
        if (!nameInput.value) {
            alert('Por favor, digite seu nome.');
            return;
        }

        trackEvent('generate_lead', { 
            lead_type: 'Contact Form Submission', 
            service_selected: selectedService 
        });

        const whatsappMessage = `Olá! Meu nome é ${nameInput.value}. Gostaria de solicitar um orçamento para: ${selectedService}.${messageInput.value ? `\n\nDetalhes: ${messageInput.value}` : ''}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=5531982162913&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    });
}

function renderHomepageBlogPosts() {
    const container = document.getElementById('homepage-blog-posts');
    if (!container) return;
    
    const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 3);
    
    container.innerHTML = recentPosts.map(post => `
        <div class="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group">
            <div class="p-6 flex-grow flex flex-col">
                 <div class="flex justify-between items-center text-xs mb-3">
                    <span class="border border-primary text-primary px-2 py-1 rounded-full font-medium font-montserrat">${post.category}</span>
                    <span class="text-slate-500">${post.readTime}</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors font-montserrat flex-grow">${post.title}</h3>
                <p class="text-sm text-slate-400 leading-relaxed">${post.excerpt}</p>
            </div>
            <div class="p-6 bg-slate-800/50 mt-auto">
                <a href="#/blog/${post.slug}" class="text-primary font-semibold text-sm hover:underline font-montserrat">
                    Ler mais <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    `).join('');
    addDelegatedBlogLinkListener('homepage-blog-posts');
}
// --- CONFIGURATION ---
// IMPORTANTE: Insira sua Chave de API do Google Cloud aqui.
const GOOGLE_API_KEY = 'SUA_API_KEY_AQUI'; 
const GOOGLE_PLACE_ID = 'ChIJqyTVcCKO9kgREUZWFNltsUY';

// --- EMBEDDED DATA (BLOG POSTS) ---
const postsData = [
    {"slug":"assistencia-tecnica-para-advogados-em-barbacena","title":"A Prova Técnica como Estratégia de Êxito: Por que Advogados de Barbacena Escolhem a Harpia Consultoria?","seoTitle":"Assistência Técnica para Advogados em Barbacena | Harpia Consultoria","excerpt":"O sucesso de uma ação judicial, seja ela cível ou trabalhista, depende da solidez das provas. Entenda como o apoio de peritos mestres e doutores transforma a complexidade técnica em vantagem jurídica.","date":"2024-08-05","category":"Perícia Judicial","readTime":"5 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?law,engineering","content":"<div class='mb-8 p-6 rounded-lg border border-slate-700 bg-slate-800/50 not-prose'><h3 class='text-lg font-bold text-white mb-4'>Artigo elaborado por Peritos Especialistas:</h3><div class='flex flex-col sm:flex-row gap-6 text-left'><div class='flex items-center gap-4'><img src='https://source.unsplash.com/400x400/?portrait,man,30s,engineer' alt='Retrato de Gustavo Santos, Engenheiro Civil.' class='w-16 h-16 rounded-full object-cover shrink-0' loading='lazy' width='100' height='100' /><div><h4 class='font-bold text-white'>Gustavo Santos</h4><p class='text-sm text-slate-400'>Eng. Civil, Especialista em Contenções, Perito Credenciado TJMG.</p></div></div><div class='flex items-center gap-4'><img src='https://source.unsplash.com/400x400/?portrait,man,20s,engineer' alt='Retrato de Lucas de Sá, Engenheiro Mecânico e Civil.' class='w-16 h-16 rounded-full object-cover shrink-0' loading='lazy' width='100' height='100' /><div><h4 class='font-bold text-white'>Lucas de Sá</h4><p class='text-sm text-slate-400'>Eng. Mecânico e Civil, Doutorando em Estruturas.</p></div></div></div></div><p class='mb-4 text-slate-300'>No contencioso moderno, a sentença é frequentemente proferida com base na convicção do juiz sobre o laudo pericial. Para o advogado, delegar a interpretação técnica apenas ao perito judicial nomeado é um risco que pode custar a causa. A Assistência Técnica Judicial surge não como um custo, mas como um seguro processual indispensável.</p><div class='my-8 text-center'><a href='https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20o%20artigo%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20para%20advogados%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20t%C3%A9cnica%20para%20um%20processo.' target='_blank' rel='noopener noreferrer' class='btn btn-primary'><span class='material-icons text-lg mr-2'>calendar_month</span>Agendar Reunião Técnica para Processo</a></div><h2 class='text-2xl font-bold text-white mt-6 mb-3'>1. Blindagem Técnica em Processos Cíveis e Trabalhistas</h2><p class='mb-4 text-slate-300'>Muitos processos de Patologia das Construções ou Insalubridade (LTCAT) são perdidos por quesitos mal formulados. Na Harpia Consultoria, apoiamos o advogado desde a petição inicial:</p><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Quesitos Estratégicos:</strong> Formulamos perguntas que obrigam o perito judicial a abordar os pontos cruciais para a tese de defesa ou acusação.</li><li><strong>Parecer Técnico de Engenharia:</strong> Documento com rigor científico, assinado por Mestres e Doutores, pronto para ser anexado aos autos e confrontar laudos judiciais equivocados.</li></ul><h2 class='text-2xl font-bold text-white mt-6 mb-3'>2. Áreas de Atuação de Alta Relevância para o Judiciário</h2><p class='mb-4 text-slate-300'>Com base nas demandas frequentes do TJMG e tribunais do trabalho, focamos em:</p><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Vícios Construtivos e Vistoria Cautelar:</strong> Essencial para ações contra construtoras ou conflitos de vizinhança em Barbacena e região.</li><li><strong>Perícias Mecânicas e NR-12:</strong> Apoio em ações de acidentes de trabalho ou falhas em sistemas de ar-condicionado (PMOC).</li><li><strong>Avaliação de Imóveis (PTAM):</strong> Fundamental para inventários, dissoluções de sociedades e garantias bancárias.</li></ul><p class='mb-4 text-slate-300'>Nossa expertise em <a href='/#servicos' class='text-primary hover:underline'>Perícia Judicial</a> e <a href='/#servicos' class='text-primary hover:underline'>Laudo Técnico de Engenharia</a> garante o suporte necessário.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>3. O Diferencial da Harpia: Tecnologia e Ciência</h2><p class='mb-4 text-slate-300'>Não entregamos apenas papéis; entregamos provas. Utilizamos Termografia Infravermelha e Drones para materializar danos que, de outra forma, seriam subjetivos, facilitando o convencimento do magistrado.</p><div class='my-8 text-center'><a href='https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20o%20artigo%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20para%20advogados%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20t%C3%A9cnica%20para%20um%20processo.' target='_blank' rel='noopener noreferrer' class='btn btn-primary'><span class='material-icons text-lg mr-2'>calendar_month</span>Agendar Reunião Técnica para Processo</a></div>"},
    {"slug":"inspecao-de-fachadas-com-drone-em-barbacena","title":"Inspeção de Fachadas com Drone em Barbacena: Precisão e Segurança na Engenharia Diagnóstica","excerpt":"Descubra como a Harpia Consultoria utiliza drones e termografia infravermelha para identificar patologias invisíveis a olho nu, garantindo laudos técnicos fundamentados e economia para condomínios.","date":"2024-08-01","category":"Inspeção Predial","readTime":"3 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?drone,facade,inspection","content":"<p class='mb-4 text-slate-300'>A manutenção predial em Barbacena ganhou um aliado poderoso: a Engenharia Diagnóstica apoiada por tecnologia de ponta. Diferente das vistorias tradicionais, a Harpia Consultoria utiliza Drones para Inspeção e Varredura a Laser 3D para alcançar pontos críticos de fachadas com total segurança e precisão milimétrica.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Por que investir em um Laudo Técnico com Drone?</h2><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Identificação de Patologias:</strong> O uso da Termografia Infravermelha permite detectar infiltrações e descolamentos de pastilhas antes que se tornem problemas graves.</li><li><strong>Segurança Jurídica:</strong> Nossos laudos são elaborados por uma equipe com alto rigor acadêmico, incluindo Mestrandos e Doutorandos, e experiência comprovada em perícias complexas como a do Morro da Forca.</li><li><strong>Conformidade Legal:</strong> Essencial para síndicos que precisam realizar a Inspeção Predial regular ou proprietários que necessitam de um Laudo de Reforma em Barbacena.</li></ul><p class='text-slate-300'>Seja para uma Vistoria Cautelar de Vizinhança ou para uma Perícia Judicial, a fundamentação técnica é o que separa um documento comum de uma prova incontestável.</p>"},
    {"slug":"a-importancia-do-laudo-de-vistoria-de-vizinhanca","title":"A Importância do Laudo de Vistoria de Vizinhança","excerpt":"Antes de iniciar uma obra, a vistoria de vizinhança é crucial para evitar conflitos e prejuízos futuros. Saiba por quê.","date":"2024-07-28","category":"Vistorias","readTime":"4 min de leitura","imageUrl":"https://source.unsplash.com/800x600/?construction,neighbor","content":"<p class='mb-4 text-slate-300'>A vistoria cautelar de vizinhança é um documento técnico essencial que registra o estado de conservação dos imóveis localizados ao redor de uma futura obra. Realizada por um engenheiro qualificado, essa inspeção preventiva tem como objetivo principal resguardar tanto a construtora quanto os vizinhos de possíveis conflitos e prejuízos.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Por que é um passo indispensável?</h2><p class='mb-4 text-slate-300'>Ao documentar detalhadamente, com fotos e anotações, as condições preexistentes das edificações vizinhas (como fissuras, trincas, umidade ou problemas estruturais), o laudo cria um registro fiel do 'antes'. Caso surjam reclamações de danos durante ou após a construção, este documento serve como prova técnica para determinar se os problemas foram causados pela obra ou se já existiam, evitando litígios e custos inesperados.</p><h2 class='text-2xl font-bold text-white mt-6 mb-3'>Benefícios para Todos</h2><ul class='list-disc list-inside text-slate-300 space-y-2 mb-4'><li><strong>Para a Construtora:</strong> Segurança jurídica, prevenção de custos com reparos indevidos e demonstração de boa-fé e profissionalismo.</li><li><strong>Para os Vizinhos:</strong> Garantia de que qualquer dano causado pela obra será devidamente identificado e reparado, trazendo tranquilidade durante o processo construtivo.</li></ul><p class='text-slate-300'>Portanto, investir em um laudo de vistoria de vizinhança não é um custo, mas uma garantia de segurança e transparência, fundamental para o sucesso de qualquer empreendimento na construção civil.</p>"}
];
const defaultTitle = 'Laudos de Engenharia Civil, Mecânica e Segurança em Barbacena | Harpia Consultoria';
const defaultDescription = 'Especialistas em laudos técnicos em Barbacena e região. Mestres e doutores em engenharia civil, mecânica e segurança do trabalho. Precisa de um laudo fundamentado? Fale conosco e solicite um orçamento via WhatsApp!';


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    handleHeaderScroll();
    handleMenuToggle();
    handleBackToTopButton();
    initFadeInOnScroll();
    initContactForm();
    loadGoogleMapsScript();
    renderHomepageBlogPosts();
    handleRouteChange(); 
    window.addEventListener('hashchange', handleRouteChange);
    setupSmoothScroll();
});

// --- GOOGLE PLACES API & TESTIMONIALS CAROUSEL ---
function loadGoogleMapsScript() {
    const reviewsTrack = document.getElementById('reviews-track');
    if (GOOGLE_API_KEY === 'SUA_API_KEY_AQUI' || !GOOGLE_API_KEY) {
        reviewsTrack.innerHTML = `<div class="review-slide"><p class="review-text">A chave da API do Google não foi configurada. Insira a chave no arquivo script.js para carregar os depoimentos.</p></div>`;
        return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    window.initMap = initMap;
}

function initMap() {
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
        placeId: GOOGLE_PLACE_ID,
        fields: ['reviews']
    }, (place, status) => {
        const reviewsTrack = document.getElementById('reviews-track');
        if (status === google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
            const fiveStarReviews = place.reviews.filter(r => r.rating === 5);
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

function renderReviews(reviews) {
    const reviewsTrack = document.getElementById('reviews-track');
    reviewsTrack.innerHTML = reviews.map(review => `
        <div class="review-slide">
            <div class="review-stars">${'★'.repeat(5)}</div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">- ${review.author_name}</p>
        </div>
    `).join('');
}

function initCarousel(totalSlides) {
    const track = document.getElementById('reviews-track');
    const prevButton = document.getElementById('prev-review');
    const nextButton = document.getElementById('next-review');
    const dotsContainer = document.getElementById('carousel-dots');
    let currentIndex = 0;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.dot');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
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


// --- SPA ROUTING & PAGE RENDERING ---
function handleRouteChange() {
    const allPages = ['page-home', 'page-blog-list', 'page-blog-post'];
    allPages.forEach(id => {
        const page = document.getElementById(id);
        if (page) page.classList.add('hidden');
    });

    const hash = window.location.hash;

    if (hash.startsWith('#/blog/')) {
        const slug = hash.split('/').pop();
        renderBlogPost(slug);
    } else if (hash === '#/blog') {
        renderBlogListPage();
    } else {
        const pageHome = document.getElementById('page-home');
        if (pageHome) pageHome.classList.remove('hidden');
        updateMetaTags(defaultTitle, defaultDescription);
    }
    window.scrollTo(0, 0);
}
    
function updateMetaTags(title, description) {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
}

function renderBlogListPage() {
    updateMetaTags('Blog e Artigos Técnicos | Harpia Consultoria', 'Acompanhe nossos artigos sobre engenharia diagnóstica, laudos técnicos, perícias, e as últimas novidades da engenharia em Barbacena e região.');
    const container = document.getElementById('page-blog-list');
    if (!container) return;
    
    const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    container.innerHTML = `
        <section class="py-28 bg-surface-dark">
            <div class="container mx-auto">
                <div class="text-center mb-16">
                    <h1 class="text-4xl font-bold text-white mb-4">Blog e Artigos Técnicos</h1>
                    <p class="section-subtitle">Informações e dicas sobre engenharia diagnóstica, laudos e perícias.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${sortedPosts.map(post => `
                        <a href="#/blog/${post.slug}" class="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group transition-transform hover:-translate-y-1">
                            <img src="${post.imageUrl}" alt="Imagem para o post: ${post.title}" class="w-full h-48 object-cover" loading="lazy" width="800" height="600" />
                            <div class="p-6 flex-grow flex flex-col">
                                <div class="flex justify-between items-center text-xs mb-3">
                                    <span class="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">${post.category}</span>
                                    <span class="text-slate-500">${post.readTime}</span>
                                </div>
                                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors flex-grow">${post.title}</h3>
                                <p class="text-sm text-slate-400 leading-relaxed mb-4">${post.excerpt}</p>
                                <div class="mt-auto text-primary font-semibold text-sm">Ler mais <span aria-hidden="true">→</span></div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    container.classList.remove('hidden');
}

function renderBlogPost(slug) {
    const container = document.getElementById('page-blog-post');
    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        container.innerHTML = `<div class="text-center py-40 text-slate-400">Artigo não encontrado. <a href="#/blog" class="text-primary underline">Voltar para o blog</a>.</div>`;
        updateMetaTags('Artigo não encontrado | Harpia Consultoria', '');
        return;
    }
    
    updateMetaTags(post.seoTitle || `${post.title} | Harpia Consultoria`, post.excerpt);

    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

    container.innerHTML = `
        <article class="py-28 bg-surface-dark">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header class="mb-12 text-center">
                    <p class="text-primary font-semibold mb-2">${post.category}</p>
                    <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">${post.title}</h1>
                    <p class="text-slate-400 text-sm">Publicado em ${formattedDate}</p>
                </header>
                <img src="${post.imageUrl}" alt="Imagem principal para ${post.title}" class="w-full h-auto max-h-[500px] object-cover rounded-lg mb-12" loading="lazy" width="800" height="600" />
                <div class="prose prose-invert max-w-none">${post.content}</div>
                <div class="mt-20 p-8 rounded-lg border border-slate-700 bg-slate-800 text-center">
                    <h3 class="text-xl font-bold text-white mb-2">Precisa de um Laudo Técnico Especializado?</h3>
                    <p class="text-slate-300 mb-6">Nossa equipe está pronta para oferecer um diagnóstico preciso e fundamentado para sua necessidade.</p>
                    <a href="https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20o%20artigo%20no%20blog%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                         <span class="material-icons text-lg mr-2">whatsapp</span> Enviar via WhatsApp
                    </a>
                </div>
            </div>
        </article>
    `;
    container.classList.remove('hidden');
}

function renderHomepageBlogPosts() {
    const container = document.getElementById('homepage-blog-posts');
    if (!container) return;
    
    const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 3);
    
    container.innerHTML = recentPosts.map(post => `
        <div class="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group">
            <div class="p-6 flex-grow">
                <div class="flex justify-between items-center text-xs mb-3">
                    <span class="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">${post.category}</span>
                    <span class="text-slate-500">${post.readTime}</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">${post.title}</h3>
                <p class="text-sm text-slate-400 leading-relaxed">${post.excerpt}</p>
            </div>
            <div class="p-6 bg-slate-800/50 mt-auto">
                <a href="#/blog/${post.slug}" class="text-primary font-semibold text-sm hover:underline">
                    Ler mais <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    `).join('');
}

// --- INTERACTIVITY & UTILS ---
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(2);
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
}

function handleHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    });
}

function handleMenuToggle() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    const toggle = () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        menuIcon.textContent = isMenuOpen ? 'close' : 'menu';
        toggleBtn.setAttribute('aria-label', isMenuOpen ? 'Fechar menu' : 'Abrir menu');
    };

    toggleBtn.addEventListener('click', toggle);
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => { if (isMenuOpen) toggle(); });
    });
}

function handleBackToTopButton() {
    const btn = document.getElementById('back-to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'translate-y-4');
            btn.style.visibility = 'visible';
        } else {
            btn.classList.add('opacity-0', 'translate-y-4');
            btn.style.visibility = 'hidden';
        }
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const serviceButtonsContainer = document.getElementById('service-options-container');
    let selectedService = '';

    serviceButtonsContainer.addEventListener('click', e => {
        const target = e.target.closest('button');
        if (!target) return;

        selectedService = target.dataset.service;
        
        serviceButtonsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const nameInput = document.getElementById('name-contact');
        const messageInput = document.getElementById('message-contact');
        
        if (!selectedService) { alert('Por favor, selecione um tipo de serviço.'); return; }
        if (!nameInput.value.trim()) { alert('Por favor, digite seu nome.'); nameInput.focus(); return; }

        const whatsappMessage = `Olá! Meu nome é ${nameInput.value.trim()}. Gostaria de solicitar um orçamento para: *${selectedService}*.${messageInput.value.trim() ? `\n\nDetalhes: ${messageInput.value.trim()}` : ''}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=5531982162913&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    });
}

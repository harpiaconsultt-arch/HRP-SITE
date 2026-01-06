// Add export {} to ensure this file is treated as a module.
export {};

interface Post {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    date: string;
    description: string;
    content: string;
}

let allPosts: Post[] = [];

// --- UI ELEMENT SELECTORS ---
const mobileMenu = document.getElementById('mobile-menu');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const menuIcon = document.getElementById('menu-icon');
const backToTopBtn = document.getElementById('back-to-top-btn');
const pageHome = document.getElementById('page-home');
const pageBlogList = document.getElementById('page-blog-list');
const pageBlogPost = document.getElementById('page-blog-post');
const contactForm = document.getElementById('contact-form');
const pages = [pageHome, pageBlogList, pageBlogPost];

// --- SEO and META TAGS ---

const setAttributeById = (id: string, value: string, attribute = 'content') => {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attribute, value);
};

const extractImageUrl = (content: string): string | null => {
    const match = content.match(/<img.*?src=["'](.*?)["']/);
    return match ? match[1] : null;
};

const defaultMeta = {
    title: "Harpia Consultoria | Engenharia Diagnóstica e Perícias em Barbacena",
    description: "Especialistas em laudos de vizinhança, vistorias cautelares e estabilidade de taludes em Barbacena e região.",
    url: "https://harpiaconsultoria.eng.br/",
    imageUrl: new URL('img/logo-share.png', "https://harpiaconsultoria.eng.br/").href
};

const resetMetaTags = () => {
    document.title = defaultMeta.title;

    setAttributeById('canonical-link', defaultMeta.url, 'href');
    setAttributeById('meta-description', defaultMeta.description);
    
    setAttributeById('og-title', defaultMeta.title);
    setAttributeById('og-description', defaultMeta.description);
    setAttributeById('og-url', defaultMeta.url);
    setAttributeById('og-image', defaultMeta.imageUrl);
    setAttributeById('og-type', 'website');
    
    setAttributeById('twitter-card', 'summary_large_image');
    setAttributeById('twitter-title', defaultMeta.title);
    setAttributeById('twitter-description', defaultMeta.description);
    setAttributeById('twitter-image', defaultMeta.imageUrl);
};

const updateMetaTags = (post: Post) => {
    const baseUrl = "https://harpiaconsultoria.eng.br/";
    const postUrl = `${baseUrl}#/blog/${post.slug}`;
    const imageUrl = extractImageUrl(post.content);
    const fullImageUrl = imageUrl ? new URL(imageUrl, baseUrl).href : defaultMeta.imageUrl;
    const postTitle = `${post.title} | Harpia Consultoria`;

    document.title = postTitle;

    setAttributeById('canonical-link', postUrl, 'href');
    setAttributeById('meta-description', post.description);
    
    setAttributeById('og-title', postTitle);
    setAttributeById('og-description', post.description);
    setAttributeById('og-url', postUrl);
    setAttributeById('og-image', fullImageUrl);
    setAttributeById('og-type', 'article');
    
    setAttributeById('twitter-card', 'summary_large_image');
    setAttributeById('twitter-title', postTitle);
    setAttributeById('twitter-description', post.description);
    setAttributeById('twitter-image', fullImageUrl);
};


// --- RENDER FUNCTIONS ---

const renderBlogListPage = () => {
    const container = document.getElementById('blog-list-container');
    if (!container) return;
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    container.innerHTML = sortedPosts.map(post => `
        <a href="#/blog/${post.slug}" class="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group transition-transform hover:-translate-y-1">
            <div class="p-6 flex-grow flex flex-col">
                 <div class="flex justify-between items-center text-xs mb-3">
                    <span class="border border-primary text-primary px-2 py-1 rounded-full font-medium font-montserrat">${post.category}</span>
                    <span class="text-slate-500">${post.readTime}</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors font-montserrat flex-grow">${post.title}</h3>
                <p class="text-sm text-slate-400 leading-relaxed">${post.description}</p>
            </div>
            <div class="p-6 bg-slate-800/50 mt-auto">
                <div class="text-primary font-semibold text-sm group-hover:underline font-montserrat">
                    Ler mais <span aria-hidden="true">→</span>
                </div>
            </div>
        </a>
    `).join('');
};

const renderBlogPostPage = (post: Post) => {
    const titleEl = document.getElementById('blog-post-title');
    const metaEl = document.getElementById('blog-post-meta');
    const contentEl = document.getElementById('blog-post-content');

    if (titleEl) titleEl.textContent = post.title;
    if (metaEl) {
        const postDate = new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
        metaEl.innerHTML = `
            <span>${post.category}</span>
            <span>&bull;</span>
            <span>${postDate}</span>
            <span>&bull;</span>
            <span>${post.readTime}</span>
        `;
    }
    if (contentEl) contentEl.innerHTML = post.content;
};


// --- ROUTER ---
const router = () => {
    const hash = window.location.hash || '#/';
    
    pages.forEach(page => page?.classList.add('hidden'));
    window.scrollTo(0, 0);

    if (hash.startsWith('#/blog/')) {
        const slug = hash.substring('#/blog/'.length);
        const post = allPosts.find(p => p.slug === slug);
        if (post) {
            renderBlogPostPage(post);
            updateMetaTags(post);
            pageBlogPost?.classList.remove('hidden');
        } else {
            window.location.hash = '#/blog';
        }
    } else if (hash === '#/blog') {
        renderBlogListPage();
        resetMetaTags();
        pageBlogList?.classList.remove('hidden');
    } else {
        pageHome?.classList.remove('hidden');
        resetMetaTags();
    }
};

// --- UI INTERACTIONS ---
const setupUIEventListeners = () => {
    
    // Mobile Menu
    if (menuToggleBtn && mobileMenu && menuIcon) {
        menuToggleBtn.addEventListener('click', () => {
            const isMenuOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuIcon.textContent = isMenuOpen ? 'menu' : 'close';
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.textContent = 'menu';
            });
        });
    }

    // Back to Top Button
    if (backToTopBtn) {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-4');
                backToTopBtn.style.visibility = 'hidden';
            }
        };
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
    
    // Fade-in on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));
    
    // Contact Form
    if (contactForm) {
        const serviceButtonsContainer = document.getElementById('service-options-container');
        let selectedService = '';

        serviceButtonsContainer?.addEventListener('click', e => {
            const target = (e.target as HTMLElement).closest('button');
            if (!target) return;
            selectedService = target.dataset.service || '';
            serviceButtonsContainer.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('bg-slate-800', 'text-white', 'border-slate-800');
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-300');
            });
            target.classList.add('bg-slate-800', 'text-white', 'border-slate-800');
            target.classList.remove('bg-white', 'text-slate-600', 'border-slate-300');
        });
        
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = (document.getElementById('name-contact') as HTMLInputElement).value;
            const message = (document.getElementById('message-contact') as HTMLTextAreaElement).value;
            if (!name) {
                alert('Por favor, preencha seu nome.');
                return;
            }
            if (!selectedService) {
                alert('Por favor, selecione um serviço.');
                return;
            }
            const whatsappMessage = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para: ${selectedService}.${message ? `\n\nDetalhes: ${message}` : ''}`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=5531982162913&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/posts.json');
        if (!response.ok) throw new Error(`Network error: ${response.status} ${response.statusText}`);
        allPosts = await response.json();
        
        setupUIEventListeners();
        window.addEventListener('hashchange', router);
        router(); // Initial route
    } catch (error) {
        console.error('Failed to load blog posts:', error);
        // Fallback for UI if posts fail to load, so the rest of the site works
        setupUIEventListeners();
        router();
    }
});
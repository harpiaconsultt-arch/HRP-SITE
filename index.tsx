// Add export {} to ensure this file is treated as a module.
export {};

// --- UI ELEMENT SELECTORS ---
const mobileMenu = document.getElementById('mobile-menu');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const menuIcon = document.getElementById('menu-icon');
const backToTopBtn = document.getElementById('back-to-top-btn');
const contactForm = document.getElementById('contact-form');

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
document.addEventListener('DOMContentLoaded', () => {
    setupUIEventListeners();
});
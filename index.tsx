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

    // Testimonials Slider
    const track = document.getElementById('testimonials-track');
    const prevBtn = document.getElementById('prev-testimonial-btn');
    const nextBtn = document.getElementById('next-testimonial-btn');
    
    if (track && prevBtn && nextBtn) {
        let autoScrollInterval: number;

        const scrollCards = (direction: 'next' | 'prev') => {
            const card = track.querySelector('.testimonial-card') as HTMLElement;
            if (!card) return;
            
            const cardStyle = window.getComputedStyle(card);
            const cardMargin = parseFloat(cardStyle.marginRight);
            const cardWidth = card.offsetWidth + cardMargin;
            const scrollAmount = cardWidth;

            track.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        };
        
        const startAutoScroll = () => {
            autoScrollInterval = window.setInterval(() => {
                const isAtEnd = Math.abs(track.scrollLeft + track.clientWidth - track.scrollWidth) < 10;
                if (isAtEnd) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollCards('next');
                }
            }, 5000); // Change slide every 5 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        prevBtn.addEventListener('click', () => {
            stopAutoScroll();
            scrollCards('prev');
            startAutoScroll();
        });
        nextBtn.addEventListener('click', () => {
            stopAutoScroll();
            scrollCards('next');
            startAutoScroll();
        });

        track.addEventListener('mouseenter', stopAutoScroll);
        track.addEventListener('mouseleave', startAutoScroll);

        startAutoScroll();
    }
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setupUIEventListeners();
});
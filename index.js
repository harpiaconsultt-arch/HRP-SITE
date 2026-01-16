
// --- UI ELEMENT SELECTORS ---
const mobileMenu = document.getElementById('mobile-menu');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const menuIcon = document.getElementById('menu-icon');
const backToTopBtn = document.getElementById('back-to-top-btn');
const contactForm = document.getElementById('contact-form');

// --- SLIDER SETUP FUNCTION ---
const setupSlider = (trackId, prevBtnId, nextBtnId, autoScroll = true) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!track || !prevBtn || !nextBtn) {
        // console.warn(`Slider elements not found for: ${trackId}`);
        return;
    }

    const cards = Array.from(track.children);
    if (cards.length === 0) return;

    let currentIndex = 0;
    let autoScrollInterval;

    const updateAndGoToSlide = (newIndex) => {
        currentIndex = (newIndex + cards.length) % cards.length;
        const card = cards[currentIndex];
        if (card) {
            track.scrollTo({
                left: card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2,
                behavior: 'smooth'
            });
        }
    };

    const startAutoScroll = () => {
        if (!autoScroll) return;
        stopAutoScroll();
        autoScrollInterval = window.setInterval(() => {
            updateAndGoToSlide(currentIndex + 1);
        }, 5000);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        updateAndGoToSlide(currentIndex - 1);
        startAutoScroll();
    });

    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        updateAndGoToSlide(currentIndex + 1);
        startAutoScroll();
    });
    
    if (autoScroll) {
        [track, prevBtn, nextBtn].forEach(el => {
            el.addEventListener('mouseenter', stopAutoScroll);
            el.addEventListener('mouseleave', startAutoScroll);
        });
        startAutoScroll();
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
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
        };
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', handleScroll, { passive: true });
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
            const target = e.target.closest('button');
            if (!target) return;
            selectedService = target.dataset.service || '';
            serviceButtonsContainer.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('selected');
            });
            target.classList.add('selected');
        });
        
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const nameInput = document.getElementById('name-contact');
            const messageInput = document.getElementById('message-contact');
            const name = nameInput ? nameInput.value : '';
            const message = messageInput ? messageInput.value : '';

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

    // Initialize Sliders
    setupSlider('testimonials-track', 'prev-testimonial-btn', 'next-testimonial-btn');
    setupSlider('homepage-blog-posts', 'prev-blog-btn', 'next-blog-btn', false); // auto-scroll disabled for blog
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setupUIEventListeners();
});

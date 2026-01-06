// Add export {} to ensure this file is treated as a module, preventing global scope conflicts.
export {};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                // Add classes for scrolled state
                header.classList.add('bg-surface-dark/95', 'backdrop-blur-sm', 'border-b', 'border-slate-800');
                header.classList.remove('bg-transparent');
            } else {
                // Revert to default state
                header.classList.remove('bg-surface-dark/95', 'backdrop-blur-sm', 'border-b', 'border-slate-800');
                header.classList.add('bg-transparent');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        // Run once on load in case the page is reloaded scrolled down
        handleScroll();
    }

    // --- MOBILE MENU TOGGLE ---
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (toggleBtn && mobileMenu && menuIcon) {
        let isMenuOpen = false;

        const toggle = () => {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            menuIcon.textContent = isMenuOpen ? 'close' : 'menu';
            toggleBtn.setAttribute('aria-label', isMenuOpen ? 'Fechar menu' : 'Abrir menu');
        };

        toggleBtn.addEventListener('click', toggle);
        
        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggle();
                }
            });
        });
    }

    // --- BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        const handleBackToTopScroll = () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-4');
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.classList.add('opacity-0', 'translate-y-4');
                backToTopBtn.style.visibility = 'hidden';
            }
        };

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', handleBackToTopScroll);
        handleBackToTopScroll();
    }

    // --- FADE-IN ON SCROLL ---
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

    // --- CONTACT FORM LOGIC ---
     const form = document.getElementById('contact-form');
    const serviceButtonsContainer = document.getElementById('service-options-container');
    if (form && serviceButtonsContainer) {
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

            const whatsappMessage = `Olá! Meu nome é ${nameInput.value}. Gostaria de solicitar um orçamento para: ${selectedService}.${messageInput.value ? `\n\nDetalhes: ${messageInput.value}` : ''}`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=5531982162913&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

});

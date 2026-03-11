document.addEventListener('DOMContentLoaded', function() {
    // Tracking de Conversão
    const trackConversion = (event) => {
        const element = event.currentTarget;
        const ctaType = element.getAttribute('data-cta') || 'unknown';
        
        console.log(`Conversão iniciada: ${ctaType}`);
        
        // Google Analytics 4
        if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'send_to': 'AW-16755835554/wWlACLC0gd4bEKKF57U-',
                'event_category': 'WhatsApp',
                'event_label': ctaType
            });
        }
        
        // Facebook Pixel
        if (typeof fbq === 'function') {
            fbq('track', 'Contact', {
                content_name: ctaType
            });
        }
    };

    const ctaElements = document.querySelectorAll('.track-conversion');
    ctaElements.forEach(element => {
        element.addEventListener('click', trackConversion);
    });

    // Animação de Scroll (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(el => observer.observe(el));
});

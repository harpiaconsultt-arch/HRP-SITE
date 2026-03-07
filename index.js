document.addEventListener("DOMContentLoaded", () => {
  // 1. Otimização do Botão Voltar ao Topo (Sem travar o scroll)
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    let isScrolling = false;

    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
      isScrolling = false;
    };

    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        window.requestAnimationFrame(toggleBackToTop);
        isScrolling = true;
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 2. Observer de Animação (Fade In)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Para de observar depois que aparece
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in-on-scroll").forEach(el => observer.observe(el));

  // 3. Formulário de Contato (WhatsApp) com Rastreamento GA4
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const serviceContainer = document.getElementById("service-options-container");
    let selectedService = "";

    serviceContainer?.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (btn) {
        selectedService = btn.dataset.service || "";
        serviceContainer.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      }
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name-contact")?.value || "";
      const message = document.getElementById("message-contact")?.value || "";

      if (!name) return alert("Por favor, preencha seu nome.");
      if (!selectedService) return alert("Por favor, selecione um serviço.");

      // --- RASTREAMENTO DE CONVERSÃO (GA4) ---
      // Envia o evento para o Google Analytics antes de abrir o WhatsApp
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          'event_category': 'WhatsApp',
          'event_label': selectedService,
          'value': 1
        });
      }
      // ---------------------------------------

      const text = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para: ${selectedService}.${message ? `\n\nDetalhes: ${message}` : ""}`;
      window.open(`https://wa.me/5532935018000?text=${encodeURIComponent(text)}`, "_blank");
    });
  }

  // 4. Slider Otimizado (Testemunhos e Blog)
  const setupSlider = (trackId, prevBtnId, nextBtnId, autoPlay = true) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!track || !prevBtn || !nextBtn) return;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    let currentIndex = 0;
    let intervalId;

    const scrollSlider = (index) => {
      currentIndex = (index + items.length) % items.length;
      const item = items[currentIndex];

      // Cálculo otimizado para centralizar
      const leftPos = item.offsetLeft - (track.offsetWidth - item.offsetWidth) / 2;
      track.scrollTo({ left: leftPos, behavior: "smooth" });
    };

    const startAutoPlay = () => {
      if (autoPlay) {
        stopAutoPlay();
        intervalId = setInterval(() => scrollSlider(currentIndex + 1), 5000);
      }
    };

    const stopAutoPlay = () => clearInterval(intervalId);

    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      scrollSlider(currentIndex - 1);
      startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      scrollSlider(currentIndex + 1);
      startAutoPlay();
    });

    if (autoPlay) {
      track.addEventListener("mouseenter", stopAutoPlay);
      track.addEventListener("mouseleave", startAutoPlay);
      startAutoPlay();
    }
  };

  setupSlider("testimonials-track", "prev-testimonial-btn", "next-testimonial-btn");
  setupSlider("homepage-blog-posts", "prev-blog-btn", "next-blog-btn", false);
});

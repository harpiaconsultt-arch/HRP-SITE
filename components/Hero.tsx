import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-surface-dark overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                    src="https://videos.pexels.com/video-files/8053782/8053782-hd_1920_1080_25fps.mp4"
                    crossOrigin="anonymous"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-surface-dark"></div>
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Engenharia Diagnóstica <br className="hidden md:block" />
                    Laudos Técnicos e Perícias de Precisão
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                   Soluções completas em laudos de engenharia civil, mecânica e segurança do trabalho em Barbacena-MG e região.
                </p>
                <a href="#contato" className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border border-white text-sm md:text-base font-medium rounded text-white hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase tracking-wide">
                    SOLICITAR ORÇAMENTO
                </a>
            </div>
            <a href="#tecnologia" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down">
                <span className="material-icons-outlined text-white/50 text-4xl">arrow_downward</span>
            </a>
        </section>
    );
};

export default Hero;
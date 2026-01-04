import React, { useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure we have a container and the script isn't already there.
        if (containerRef.current && !containerRef.current.querySelector('script')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.trustindex.io/loader.js?c60e62361b0324244f566dcd319';
            script.defer = true;
            script.async = true;
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <section className="py-20 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Depoimentos de Nossos Clientes</h2>
                    <p className="text-slate-400">O que dizem sobre nossos laudos e perícias de engenharia.</p>
                </div>
                {/* The Trustindex widget script will be injected into this div */}
                <div ref={containerRef}></div>
            </div>
        </section>
    );
};

export default Testimonials;
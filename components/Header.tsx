import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '/#tecnologia', label: 'Tecnologia' },
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#metodologia', label: 'Metodologia' },
    { href: '/#equipe', label: 'Equipe' },
    { href: '#/blog', label: 'Blog' },
    { href: '/#contato', label: 'Contato' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-dark/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#/" className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.svg" alt="Logo da Harpia Consultoria" className="h-10"/>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xl tracking-tight leading-none">HARPIA</span>
                            <span className="text-slate-400 text-xs font-medium tracking-[0.2em] leading-none">CONSULTORIA</span>
                        </div>
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">{link.label}</a>
                        ))}
                    </nav>
                    <div className="hidden md:flex">
                        <a href="/#contato" className="inline-flex items-center justify-center px-4 py-2 border border-slate-500 text-sm font-medium rounded text-white hover:bg-slate-800 hover:border-slate-400 transition-all">
                            SOLICITAR ORÇAMENTO
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white" type="button" aria-label="Open menu">
                            <span className="material-icons-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                 <div className="md:hidden bg-surface-dark/95 backdrop-blur-sm">
                    <nav className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                             <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white py-2 text-base font-medium transition-colors">{link.label}</a>
                        ))}
                        <a href="/#contato" onClick={() => setIsMenuOpen(false)} className="block w-full text-center mt-4 px-4 py-2 border border-slate-500 text-sm font-medium rounded text-white hover:bg-slate-800 hover:border-slate-400 transition-all">
                            SOLICITAR ORÇAMENTO
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white tracking-tighter">
              HARPIA<span className="text-cta-green">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Serviços</a>
            <a href="#metodologia" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Metodologia</a>
            <a href="#sobre" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Sobre</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Blog</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all duration-200 bg-cta-green rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#servicos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Serviços</a>
            <a href="#metodologia" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Metodologia</a>
            <a href="#sobre" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Sobre</a>
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Blog</a>
            <a href="#contato" className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold text-white bg-cta-green hover:bg-green-700">Fale Conosco</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

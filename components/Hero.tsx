import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero-tailark-wrapper" className="relative w-full overflow-hidden bg-background-dark pt-32 pb-16 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl mb-6 leading-tight">
              Laudos Estruturais e Perícias de Engenharia em <span className="text-cta-green">Barbacena e JF</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Engenharia Diagnóstica com rigor técnico. Prova pericial definitiva para advogados, síndicos e construtoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                aria-label="Solicitar Consultoria Técnica em Barbacena e JF"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-cta-green rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Solicitar Parecer Técnico
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#metodologia"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 transition-all duration-200 bg-transparent border border-gray-600 rounded-lg hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <FileText className="mr-2 w-5 h-5" />
                Ver Metodologia de Análise
              </a>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Engenheiro Perito realizando vistoria estrutural em Barbacena"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
                fetchPriority="high"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-surface-dark/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Disponível Agora</span>
                </div>
                <p className="text-sm text-gray-200 font-medium">
                  Atendimento prioritário para vistorias cautelares e laudos de emergência.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

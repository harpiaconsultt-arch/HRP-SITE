import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-sans">
      <Header />
      
      <main>
        <Hero />

        {/* Placeholder para Metodologia */}
        <section id="metodologia" className="py-20 bg-surface-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Metodologia de Análise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa abordagem técnica segue rigorosamente as normas da ABNT e as melhores práticas de engenharia diagnóstica.
            </p>
          </div>
        </section>

        {/* Placeholder para Serviços */}
        <section id="servicos" className="py-20 bg-background-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-surface-dark rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Laudos Estruturais</h3>
                <p className="text-gray-400">Avaliação completa da estabilidade e segurança da sua edificação.</p>
              </div>
              <div className="p-6 bg-surface-dark rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Vistoria Cautelar</h3>
                <p className="text-gray-400">Proteção jurídica e técnica antes do início de obras vizinhas.</p>
              </div>
              <div className="p-6 bg-surface-dark rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Perícia Judicial</h3>
                <p className="text-gray-400">Assistência técnica em processos judiciais envolvendo imóveis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder para Contato */}
        <section id="contato" className="py-20 bg-cta-green/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Fale Conosco</h2>
            <p className="text-gray-300 mb-8">Solicite seu orçamento ou tire suas dúvidas com nossa equipe.</p>
            <button className="px-8 py-3 bg-cta-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
              Entrar em Contato via WhatsApp
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Harpia Consultoria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;

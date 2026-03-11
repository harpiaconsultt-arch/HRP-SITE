import React from 'react';
import { Scale, FileText, ArrowRight, Gavel, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const PericiaJudicial = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-slate-800 text-white py-20 px-6 border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-slate-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 text-emerald-400"
          >
            Engenharia Legal & Forense
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Assistência Técnica em <br/>
            <span className="text-emerald-400">Processos Judiciais de Engenharia</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Atuação como Perito Judicial e Assistente Técnico em Juiz de Fora e Região. Laudos fundamentados para garantir a defesa técnica do seu caso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5532935018000?text=Sou%20advogado%20e%20preciso%20de%20assistente%20técnico" 
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
            >
              Sou Advogado <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/5532935018000?text=Sou%20parte%20em%20processo%20e%20preciso%20de%20ajuda" 
              className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
            >
              Sou Parte no Processo
            </a>
          </div>
        </div>
      </header>

      {/* Context Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">O Juiz não é Engenheiro. <br/>Nós traduzimos a técnica.</h2>
              <p className="text-lg text-slate-600 mb-4">
                Em litígios envolvendo imóveis, construtoras ou condomínios, a prova pericial é decisiva. Sem um Assistente Técnico qualificado, você fica à mercê do laudo do perito do juízo.
              </p>
              <p className="text-lg text-slate-600 border-l-4 border-emerald-500 pl-4 italic">
                "Um laudo mal fundamentado pode custar a causa. Nossa função é garantir que a verdade técnica prevaleça."
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start">
                <Gavel className="w-8 h-8 text-slate-700 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Quesitos Técnicos</h3>
                  <p className="text-sm text-slate-600">Elaboração estratégica de perguntas para o perito judicial.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start">
                <FileText className="w-8 h-8 text-slate-700 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Parecer Técnico Divergente</h3>
                  <p className="text-sm text-slate-600">Contestação técnica robusta caso o laudo oficial apresente falhas.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start">
                <Scale className="w-8 h-8 text-slate-700 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Acompanhamento da Perícia</h3>
                  <p className="text-sm text-slate-600">Presença in loco para garantir que todos os pontos sejam avaliados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Áreas de Atuação Pericial</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
           {['Vícios Construtivos', 'Avaliação de Imóveis', 'Usucapião', 'Desapropriação', 'Nunciação de Obra Nova', 'Renovatória de Aluguel'].map((item, i) => (
             <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center font-medium text-slate-700 border border-slate-200">
               {item}
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Precisa de suporte técnico jurídico?</h2>
        <p className="text-xl text-slate-300 mb-8">Atuamos em parceria com escritórios de advocacia em toda a Zona da Mata.</p>
        <a 
          href="https://wa.me/5532935018000?text=Preciso%20de%20assistência%20técnica%20judicial" 
          className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Falar com Engenheiro Perito <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>
    </div>
  );
};

export default PericiaJudicial;

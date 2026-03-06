import React from 'react';
import { FileCheck, AlertTriangle, ArrowRight, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Regularizacao = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Regularize seu Condomínio ou Empresa <br/>
            <span className="text-blue-400">Emissão e Renovação de AVCB</span>
          </motion.h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Evite multas e interdições. Elaboramos o Projeto de Prevenção e Combate a Incêndio (PPCI) e aprovamos junto ao Corpo de Bombeiros de MG.
          </p>
          <a 
            href="https://wa.me/5532935018000?text=Preciso%20renovar%20o%20AVCB" 
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento AVCB <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">O que acontece se o AVCB estiver vencido?</h3>
                <p className="text-yellow-700">
                  Além do risco à vida, seu imóvel pode ser interditado, receber multas pesadas e, em caso de sinistro, a seguradora pode recusar o pagamento da indenização.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Nossos Serviços de Regularização</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors">
              <FileCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">AVCB e CLCB</h3>
              <p className="text-slate-600">Auto de Vistoria do Corpo de Bombeiros para condomínios residenciais, comerciais e indústrias.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors">
              <Building className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Projeto de Incêndio (PPCI)</h3>
              <p className="text-slate-600">Dimensionamento de hidrantes, extintores, sinalização e saídas de emergência conforme normas vigentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Como funciona o processo?</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { step: '01', title: 'Vistoria Inicial', desc: 'Identificamos as adequações necessárias.' },
              { step: '02', title: 'Projeto', desc: 'Elaboração das plantas e memoriais.' },
              { step: '03', title: 'Execução', desc: 'Acompanhamento da instalação dos equipamentos.' },
              { step: '04', title: 'Aprovação', desc: 'Trâmite final junto aos Bombeiros.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-blue-100 block mb-2">{item.step}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Regularize seu imóvel hoje</h2>
        <p className="text-xl text-blue-100 mb-8">Atendemos Barbacena, Juiz de Fora e toda a região.</p>
        <a 
          href="https://wa.me/5532935018000?text=Quero%20regularizar%20meu%20imóvel" 
          className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Falar com Especialista <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>
    </div>
  );
};

export default Regularizacao;

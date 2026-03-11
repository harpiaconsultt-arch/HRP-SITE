import React from 'react';
import { ShieldAlert, CheckCircle, ArrowRight, Camera, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const LaudoEstrutural = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Seu imóvel apresenta riscos? <br/>
            <span className="text-emerald-400">Laudos de Engenharia com precisão forense</span>
          </motion.h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Diagnósticos estruturais não destrutivos em Barbacena e Juiz de Fora. Identificamos a causa raiz de trincas e infiltrações com tecnologia de ponta.
          </p>
          <a 
            href="https://wa.me/5532935018000?text=Olá,%20preciso%20de%20um%20laudo%20estrutural" 
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Agendar Vistoria Técnica <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Problem/Agitation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Rachaduras podem condenar seu imóvel</h2>
              <p className="text-lg text-slate-600 mb-4">
                Ignorar fissuras, trincas ou infiltrações não é apenas estético. É um risco à segurança da sua família e ao valor do seu patrimônio.
              </p>
              <p className="text-lg text-slate-600">
                Muitas "soluções rápidas" apenas escondem o problema. Você precisa de um diagnóstico de engenharia para resolver a causa raiz.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <ShieldAlert className="w-6 h-6 mr-2" /> Riscos Comuns
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-red-500 mr-2">✖</span> Colapso parcial de estruturas</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✖</span> Desvalorização de até 30% do imóvel</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">✖</span> Infiltrações que geram mofo e doenças</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Technology Section */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tecnologia de Ponta para Diagnósticos Definitivos</h2>
          <p className="text-slate-600">Não "achamos", nós medimos. Utilizamos equipamentos de última geração.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Termografia Infravermelha</h3>
            <p className="text-slate-600 text-sm">Detecta infiltrações ocultas e falhas de isolamento sem quebrar paredes.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Escaneamento 3D</h3>
            <p className="text-slate-600 text-sm">Mapeamento preciso de deformações estruturais invisíveis a olho nu.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Laudo NBR 13.752</h3>
            <p className="text-slate-600 text-sm">Documento técnico com validade jurídica, assinado por Engenheiro Perito.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Não espere o problema agravar</h2>
        <p className="text-xl text-slate-300 mb-8">Fale diretamente com um Engenheiro Especialista agora mesmo.</p>
        <a 
          href="https://wa.me/5532935018000?text=Olá,%20preciso%20de%20um%20laudo%20estrutural" 
          className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Solicitar Orçamento via WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>
    </div>
  );
};

export default LaudoEstrutural;

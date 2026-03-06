import React from 'react';
import { Home, ShieldCheck, ArrowRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const VistoriaCautelar = () => {
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
            Vai construir ou tem obra ao lado? <br/>
            <span className="text-emerald-400">Proteja seu imóvel com a Vistoria Cautelar</span>
          </motion.h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            A Vistoria Cautelar de Vizinhança é a única forma de garantir juridicamente o estado atual do seu imóvel antes do início de obras vizinhas.
          </p>
          <a 
            href="https://wa.me/5532935018000?text=Preciso%20de%20vistoria%20cautelar" 
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Agendar Vistoria Cautelar <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Problem/Solution Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Uma apólice de seguro para sua paz</h2>
            <p className="text-lg text-slate-600 mb-4">
              Obras de grande porte geram vibrações e movimentações de terra que podem causar trincas e danos aos imóveis vizinhos.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              Sem um laudo prévio (Vistoria Cautelar), é muito difícil provar que o dano foi causado pela obra, resultando em prejuízos e brigas judiciais.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center text-slate-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> Evita processos judiciais infundados
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> Garante o reparo de danos reais
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> Documenta o estado de conservação
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 text-center">
            <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Registro Fotográfico Completo</h3>
            <p className="text-slate-600">
              Nosso laudo inclui centenas de fotos em alta resolução e descrição detalhada de cada ambiente, registrando cada fissura existente antes da obra começar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Proteja seu patrimônio agora</h2>
        <p className="text-xl text-slate-300 mb-8">Não espere a primeira rachadura aparecer.</p>
        <a 
          href="https://wa.me/5532935018000?text=Quero%20proteger%20meu%20imóvel" 
          className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Falar com Engenheiro <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>
    </div>
  );
};

export default VistoriaCautelar;

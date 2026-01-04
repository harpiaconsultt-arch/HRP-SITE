import React from 'react';

const technologies = [
    {
        icon: 'center_focus_strong',
        title: 'Análise Não Destrutiva',
        description: 'Ensaios não destrutivos (ultrassom, esclerometria) para laudos técnicos e vistorias estruturais.'
    },
    {
        icon: 'sensors',
        title: 'Varredura a Laser 3D',
        description: 'Modelagem 3D para identificação de deformações em laudos periciais e perícias judiciais.'
    },
    {
        icon: 'thermostat',
        title: 'Termografia Infravermelha',
        description: 'Detecção de umidade e infiltrações para vistorias e avaliações de imóveis completas.'
    }
];

const Technology: React.FC = () => {
    return (
        <section className="py-20 bg-slate-950" id="tecnologia">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Tecnologia Aplicada a Laudos de Engenharia Civil</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Métodos de inspeção que aumentam a precisão dos laudos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-800 hover:shadow-lg hover:shadow-primary/10 hover:border-slate-700 transition-all text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-6 group-hover:bg-slate-700 transition-colors">
                                <span className="material-icons-outlined text-4xl text-primary">{tech.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;

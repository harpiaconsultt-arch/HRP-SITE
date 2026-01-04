import React from 'react';

const teamMembers = [
    {
        name: 'Gustavo Santos',
        title: 'Engenheiro Civil',
        description: 'Especialista em contenções e estabilidade de taludes, perito credenciado TJMG e MPMG.',
        imageUrl: 'https://source.unsplash.com/400x400/?portrait,man,30s,engineer' 
    },
    {
        name: 'Lucas de Sá',
        title: 'Engenheiro Mecânico e Civil',
        description: 'Engenheiro com formação em Mecânica, Segurança do Trabalho e Civil. Doutorando em Estruturas.',
        imageUrl: 'https://source.unsplash.com/400x400/?portrait,man,20s,engineer'
    },
    {
        name: 'Djalmir Silva',
        title: 'Arquiteto e Urbanista',
        description: 'Arquiteto e urbanista, capitão da reserva da Aeronáutica e consultor do IPHAN.',
        imageUrl: 'https://source.unsplash.com/400x400/?portrait,man,50s,architect'
    }
];

const Team: React.FC = () => {
    return (
        <section className="py-20 bg-slate-950" id="equipe">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Nossa Equipe</h2>
                    <p className="text-slate-400">Profissionais especializados em laudos e perícias técnicas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50 text-center hover:bg-slate-800/50 transition-all">
                            <div className="w-24 h-24 mx-auto rounded-full bg-slate-700 mb-4 overflow-hidden">
                                <img 
                                    src={member.imageUrl} 
                                    alt={`Foto de ${member.name}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-wide mb-4">{member.title}</p>
                            <p className="text-sm text-slate-400">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
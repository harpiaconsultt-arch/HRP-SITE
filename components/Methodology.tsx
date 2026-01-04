import React from 'react';

const methodologySteps = [
    {
        step: '01',
        icon: 'chat',
        title: 'Consultoria e Escopo',
        description: 'Entendimento da demanda e definição do tipo de laudo necessário.',
    },
    {
        step: '02',
        icon: 'search',
        title: 'Inspeção Técnica',
        description: 'Visita in loco com equipamentos de última geração para coleta de dados.',
    },
    {
        step: '03',
        icon: 'analytics',
        title: 'Análise e Parecer',
        description: 'Processamento dos dados e elaboração do parecer técnico fundamentado.',
    },
    {
        step: '04',
        icon: 'verified',
        title: 'Entrega do Laudo',
        description: 'Laudo completo, pronto para órgãos públicos, instituições financeiras ou processos judiciais.',
    },
];

const MethodologyStep: React.FC<{ step: string, icon: string, title: string, description: string, isLast?: boolean }> = ({ step, icon, title, description, isLast = false }) => (
    <div className={`relative flex items-start ${!isLast ? 'mb-12' : ''} group`}>
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center z-10 text-sm font-bold text-slate-400 group-hover:border-primary group-hover:text-primary transition-colors">
            {step}
        </div>
        <div className="ml-8 pt-2">
            <div className="flex items-center mb-1">
                <span className="material-icons-outlined text-slate-400 mr-2 text-xl">{icon}</span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    </div>
);


const Methodology: React.FC = () => {
    return (
        <section className="py-20 bg-slate-950" id="metodologia">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Metodologia para Laudos Técnicos e Periciais</h2>
                    <p className="text-slate-400">Processo estruturado e fundamentado.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 h-full"></div>
                    {methodologySteps.map((item, index) => (
                        <MethodologyStep 
                            key={index} 
                            step={item.step}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            isLast={index === methodologySteps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;

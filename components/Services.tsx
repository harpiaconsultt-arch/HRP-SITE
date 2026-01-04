import React from 'react';

const services = [
    {
        icon: 'description',
        title: 'Laudos Técnicos de Engenharia Civil',
        description: 'Laudo técnico e relatório técnico para regularização, reformas, comprovação de estabilidade e atendimento a órgãos públicos.',
        isFeatured: false,
    },
    {
        icon: 'apartment',
        title: 'Vistorias e Avaliação de Imóveis',
        description: 'Vistoria técnica e laudo de avaliação de imóvel para compra/venda, financiamentos, seguros e atualização patrimonial.',
        isFeatured: true,
    },
    {
        icon: 'account_balance',
        title: 'Laudos para Caixa e Bancos',
        description: 'Laudo de engenharia para Caixa, Banco do Brasil e demais instituições financeiras, conforme critérios técnicos exigidos.',
        isFeatured: false,
    },
    {
        icon: 'gavel',
        title: 'Perícias Judiciais',
        description: 'Laudo pericial de engenharia civil para ações judiciais e extrajudiciais, conflitos construtivos e vícios em obras.',
        isFeatured: false,
    }
];

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-surface-dark" id="servicos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Serviços em Laudos Técnicos e Perícias</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Laudos técnicos, perícias e vistorias para imóveis residenciais, comerciais e industriais.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="relative bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-primary/50 transition-colors group">
                           {service.isFeatured && <span className="absolute top-4 right-4 bg-primary/20 text-primary text-xs px-2 py-1 rounded font-semibold">DESTAQUE</span>}
                            <div className="text-4xl text-slate-300 group-hover:text-primary mb-4 block">
                                <span className="material-icons-outlined text-4xl">{service.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

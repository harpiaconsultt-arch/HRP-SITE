import React from 'react';

const reportTypes = [
    { icon: 'account_balance', title: 'Avaliação de Valor de Imóvel', subtitle: 'Laudo para Instituições Financeiras, Bancos e inventários' },
    { icon: 'warning', title: 'Laudo de Patologia Estrutural', subtitle: 'Análise de trincas, rachaduras e anomalias construtivas' },
    { icon: 'gavel', title: 'Laudo Pericial de Engenharia Civil', subtitle: 'Assistência técnica para processos judiciais e extrajudiciais' },
    { icon: 'visibility', title: 'Vistoria Cautelar e Recebimento de Obras', subtitle: 'Para obras novas, locações e garantia de vizinhança' },
    { icon: 'construction', title: 'Laudo de Reforma (NBR 16.280) e Inspeção Predial', subtitle: 'Segurança para reformas e manutenção preventiva de edifícios' },
    { icon: 'ac_unit', title: 'PMOC para Ar-Condicionado', subtitle: 'Plano de Manutenção, Operação e Controle (Obrigatório por Lei)' },
    { icon: 'precision_manufacturing', title: 'Laudo de Máquinas (NR-12) e Inspeção de Playgrounds', subtitle: 'Segurança de equipamentos e conformidade de áreas de lazer' },
    { icon: 'gas_meter', title: 'Teste de Estanqueidade (Gás) e Vasos de Pressão (NR-13)', subtitle: 'Inspeção de segurança para redes de gás e equipamentos' },
    { icon: 'folder_shared', title: 'LTCAT e Laudo de Insalubridade/Periculosidade', subtitle: 'Documentação para fins previdenciários e trabalhistas' },
    { icon: 'support_agent', title: 'Assistência Técnica em Perícias Trabalhistas', subtitle: 'Fundamentação técnica em processos de SST' },
];

const ReportTypes: React.FC = () => {
    return (
        <section className="py-16 bg-surface-dark border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tipos de Laudos Técnicos e Perícia</h2>
                    <p className="text-slate-400 text-sm">Conheça as principais soluções que oferecemos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {reportTypes.map((report, index) => (
                        <div key={index} className="flex items-center p-4 bg-slate-800/30 rounded border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                            <span className="material-icons-outlined text-slate-400 mr-4 text-2xl flex-shrink-0 w-6 text-center">{report.icon}</span>
                            <div>
                                <h3 className="text-white font-medium text-sm">{report.title}</h3>
                                <p className="text-xs text-slate-500">{report.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm text-slate-400 mt-8">
                        Nossos laudos são elaborados por uma <a href="#equipe" className="text-primary hover:underline font-semibold">equipe de mestres e doutores</a> com vasta experiência em casos de alta complexidade, como a perícia no Morro da Forca, garantindo a máxima precisão e autoridade técnica.
                    </p>
                    <p className="text-xs text-slate-600 mt-4">Todos os laudos seguem as normas técnicas aplicáveis e incluem ART/RRT.</p>
                 </div>
            </div>
        </section>
    );
};

export default ReportTypes;
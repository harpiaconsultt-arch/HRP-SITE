import React from 'react';

const faqItems = [
    {
        question: 'Quanto custa um laudo técnico de engenharia civil?',
        answer: 'O custo varia conforme a complexidade, área do imóvel e finalidade do laudo. Entre em contato para um orçamento personalizado.'
    },
    {
        question: 'Qual a diferença entre laudo técnico, relatório e parecer?',
        answer: 'O Laudo é mais completo, conclusivo e fundamentado tecnicamente. O Relatório descreve fatos observados. O Parecer é uma opinião técnica resumida.'
    },
    {
        question: 'Qualquer engenheiro pode fazer laudo técnico?',
        answer: 'O ideal é que seja feito por engenheiro civil com especialização na área de perícias ou patologia, devidamente registrado no CREA.'
    },
    {
        question: 'Os laudos atendem Caixa e bancos?',
        answer: 'Sim, nossos laudos são elaborados seguindo rigorosamente as normas da ABNT e exigências das instituições financeiras.'
    }
];

const FAQ: React.FC = () => {
    return (
        <section className="py-20 bg-surface-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Perguntas Frequentes sobre Laudos Técnicos</h2>
                    <p className="text-slate-400">Tire suas dúvidas sobre laudos de engenharia civil.</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <details key={index} className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 open:border-primary/50 transition-all">
                            <summary className="flex justify-between items-center p-5 cursor-pointer list-none text-white font-medium hover:bg-slate-800 transition-colors">
                                <span>{item.question}</span>
                                <span className="material-icons-outlined transform group-open:rotate-180 transition-transform text-2xl">expand_more</span>
                            </summary>
                            <div className="px-5 pb-5 text-slate-400 text-sm">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

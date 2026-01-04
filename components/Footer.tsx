import React from 'react';

const mainLinks = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#metodologia', label: 'Metodologia' },
    { href: '/#equipe', label: 'Equipe' },
    { href: '/#contato', label: 'Contato' },
    { href: '#/blog', label: 'Blog' },
];

const serviceLinks = [
    { href: '/#servicos', label: 'Laudo de Patologia Estrutural' },
    { href: '/#servicos', label: 'Laudo de Reforma (NBR 16.280)' },
    { href: '/#servicos', label: 'Perícia Judicial' },
    { href: '/#servicos', label: 'PMOC e Laudos (NR-12/NR-13)' },
    { href: '/#servicos', label: 'LTCAT e Laudos de SST' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-5 lg:col-span-4">
                        <a href="#/" className="flex-shrink-0 flex items-center gap-2 mb-4">
                           <img src="/logo.svg" alt="Logo da Harpia Consultoria" className="h-10"/>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-xl tracking-tight leading-none">HARPIA</span>
                                <span className="text-slate-400 text-xs font-medium tracking-[0.2em] leading-none">CONSULTORIA</span>
                            </div>
                        </a>
                        <p className="text-sm max-w-xs">
                           Laudos técnicos, perícias e vistorias de engenharia civil, mecânica e segurança do trabalho.
                        </p>
                    </div>

                    <div className="md:col-span-3 lg:col-span-2">
                        <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navegação</h4>
                        <nav className="flex flex-col space-y-2">
                             {mainLinks.map(link => (
                                <a key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                         <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Principais Laudos</h4>
                         <nav className="flex flex-col space-y-2">
                            {serviceLinks.map(link => (
                                <a key={link.label} href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-600">
                    <p className="mb-2">Atendemos Barbacena-MG, São João del-Rei, Juiz de Fora e toda a região de Campos das Vertentes.</p>
                    <p>© {new Date().getFullYear()} Harpia Consultoria. Todos os direitos reservados.</p>
                    <p className="mt-1">CREA-MG 144817/D MG | CNPJ: 46.128.059/0001-72</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
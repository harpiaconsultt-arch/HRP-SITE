import React, { useState } from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const contactDetails = [
    { icon: 'location_on', title: 'ENDEREÇO', lines: ['Avenida Olegário Maciel, 470, Centro', 'Barbacena – MG | CEP 36200-082'] },
    { icon: 'phone_in_talk', title: 'TELEFONE', lines: ['(31) 98216-2913'] },
    { icon: 'mail_outline', title: 'E-MAIL', lines: ['contato@harpiaconsultoria.eng.br'] },
    { icon: 'schedule', title: 'HORÁRIO DE ATENDIMENTO', lines: ['Segunda a Sexta: 8h às 17h', 'Sábado: Plantão via WhatsApp'] },
];

const serviceOptions = ['Vistoria de Imóvel', 'Laudo para Reforma', 'Perícia Judicial', 'Outro'];

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedService) {
            alert('Por favor, selecione um tipo de serviço.');
            return;
        }
        if (!name) {
            alert('Por favor, digite seu nome.');
            return;
        }
        const whatsappMessage = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para: ${selectedService}.${message ? `\n\nDetalhes: ${message}` : ''}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=5531982162913&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contato" className="bg-background-light text-slate-800">
            <div className="flex flex-col lg:flex-row min-h-[90vh]">
                {/* Left Column: Map */}
                <FadeInOnScroll className="lg:w-5/12 w-full aspect-square lg:aspect-auto" delay={100}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.2755881772346!2d-43.768791099999994!3d-21.221067299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0x48f68e2270d524ab%3A0x46b16dd914564611!2sHarpia%20Consultoria%20-%20Engenharia%20e%20Laudos%20T%C3%A9cnicos!5e1!3m2!1spt-BR!2sbr!4v1767458030731!5m2!1spt-BR!2sbr"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de Localização da Harpia Consultoria"
                    ></iframe>
                </FadeInOnScroll>

                {/* Right Column: Content */}
                <div className="lg:w-7/12 w-full flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                    <FadeInOnScroll>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">Fale Conosco</h2>
                        <p className="text-slate-600 mb-10">Pronto para começar? Envie-nos uma mensagem para um orçamento rápido e sem compromisso.</p>
                    </FadeInOnScroll>

                    <FadeInOnScroll delay={150} className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-sm font-semibold text-slate-700 mb-3 block">1. Qual serviço você precisa?</label>
                                <div className="flex flex-wrap gap-2">
                                    {serviceOptions.map((service) => (
                                        <button key={service} type="button" onClick={() => setSelectedService(service)} className={`px-4 py-2 text-sm rounded-full border transform transition-all duration-200 ${selectedService === service ? 'bg-slate-800 text-white border-slate-800 shadow-lg scale-105' : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100 hover:border-slate-400 hover:shadow-sm'}`}>
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="name-contact" className="text-sm font-semibold text-slate-700 mb-2 block">2. Seu nome completo *</label>
                                <input id="name-contact" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" placeholder="Digite seu nome" />
                            </div>

                            <div>
                                <label htmlFor="message-contact" className="text-sm font-semibold text-slate-700 mb-2 block">3. Detalhes adicionais (opcional)</label>
                                <textarea id="message-contact" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-900 text-sm placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition" placeholder="Descreva brevemente sua necessidade..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center text-center text-sm transition-colors duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40">
                                <span className="material-icons text-lg mr-2">whatsapp</span> Enviar via WhatsApp
                            </button>
                            <p className="text-center text-xs text-slate-500">Ao enviar, você será redirecionado para o WhatsApp.</p>
                        </form>
                    </FadeInOnScroll>

                    <FadeInOnScroll delay={300}>
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Ou entre em contato diretamente</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                                {contactDetails.map((detail) => (
                                    <div key={detail.title} className="flex items-start">
                                        <span className="material-icons-outlined text-slate-500 mr-4 text-3xl">{detail.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-slate-500 text-xs tracking-wider mb-1">{detail.title}</h4>
                                            {detail.lines.map((line, i) => (
                                                <p key={i} className="text-slate-700 text-sm">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex items-start p-4 bg-slate-100 rounded-lg border border-slate-200">
                                <span className="material-icons-outlined text-slate-500 mr-4 text-3xl shrink-0">event_available</span>
                                <div>
                                    <h4 className="font-semibold text-slate-500 text-xs tracking-wider mb-1">AGENDAMENTO FLEXÍVEL</h4>
                                    <p className="text-slate-700 text-sm">Para sua comodidade, atendimentos podem ser agendados online. Oferecemos também horários especiais mediante consulta prévia para atender sua necessidade.</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;
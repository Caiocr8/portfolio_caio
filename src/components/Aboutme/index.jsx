import React from 'react';

const AboutMe = () => {
    return (
        <section className="mb-8 space-y-16">
            {/* Apresentação */}
            <div data-aos="fade-up" data-aos-duration="800">
                <h2 className="text-2xl text-white font-bold mb-2">Desenvolver experiências, não só interfaces</h2>
                <p className="text-gray-300 text-lg">
                    Desenvolver interfaces modernas e intuitivas não é só sobre código — é sobre criar experiências.<br />
                    Sou <span className="font-semibold text-cyan-400">Caio Andrade</span>, Desenvolvedor Front-End com sólida experiência em <span className="font-semibold">React.js</span>, <span className="font-semibold">JavaScript</span> e <span className="font-semibold">Flutter</span>.<br />
                    Ao longo da minha trajetória, atuei em diversos projetos web e mobile, sempre com foco em performance, responsividade e uma excelente experiência do usuário.
                </p>
            </div>
            {/* Linha do tempo */}
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <h3 className="text-xl text-cyan-400 font-bold mb-2">Minha Jornada Profissional</h3>
                <ul className="border-l-2 border-cyan-400 pl-6 space-y-6">
                    <li>
                        <span className="font-semibold text-white">2021 - Primeiros projetos:</span>
                        <p className="text-gray-400">
                            Iniciei desenvolvendo aplicações web simples, aprendendo HTML, CSS e JavaScript na prática. Descobri o poder de transformar ideias em soluções reais.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold text-white">2022 - React e Mobile:</span>
                        <p className="text-gray-400">
                            Aprofundei em <span className="font-semibold text-cyan-400">React.js</span> e comecei a criar apps mobile com <span className="font-semibold text-cyan-400">Flutter</span>, focando em performance, UX e acessibilidade.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold text-white">2023 - Projetos reais e times ágeis:</span>
                        <p className="text-gray-400">
                            Participei de projetos para empresas, integrando APIs, usando <span className="font-semibold">Firebase</span> e aplicando Scrum para entregas contínuas. Aprendi a importância do trabalho em equipe e da entrega de valor constante.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold text-white">2024 - Soluções escaláveis e inovação:</span>
                        <p className="text-gray-400">
                            Desenvolvi sistemas robustos, implementei design systems, foquei em acessibilidade e busquei inovação em cada entrega. 
                        </p>
                    </li>
                </ul>
            </div>
            {/* Conquistas e diferenciais */}
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <h3 className="text-xl text-cyan-400 font-bold mb-2">O que me destaca</h3>
                <ul className="list-disc list-inside mt-2 mb-2 text-base text-gray-400">
                    <li>✅ Criação de aplicações robustas com Flutter e Firebase</li>
                    <li>✅ Boas práticas com React.js e componentização eficiente</li>
                    <li>✅ Atuação em times ágeis, aplicando Scrum e entregando valor contínuo</li>
                    <li>✅ Foco em acessibilidade, design system e interfaces responsivas</li>
                </ul>
            </div>
            {/* Como soluciono problemas */}
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                <h3 className="text-xl text-cyan-400 font-bold mb-2">Como soluciono problemas</h3>
                <p className="text-gray-300 text-lg">
                    Meu processo começa entendendo o desafio a fundo, pesquisando referências e propondo soluções criativas e eficientes.<br />
                    Utilizo ferramentas como <span className="font-semibold">React DevTools</span>, <span className="font-semibold">Chrome DevTools</span> e <span className="font-semibold">Figma</span> para prototipar, testar e otimizar cada detalhe.
                </p>
                <ul className="list-disc list-inside mt-2 mb-2 text-base text-gray-400">
                    <li>Identifico gargalos de performance e aplico otimizações</li>
                    <li>Faço integração de APIs REST e Firebase com segurança</li>
                    <li>Trabalho com componentização e reuso de código</li>
                    <li>Priorizo acessibilidade e responsividade em todas as telas</li>
                </ul>
            </div>
            {/* Interesses e chamada para ação */}
            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" className="flex flex-col items-start bg-[#232323] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-cyan-400 font-bold mb-2">Vamos conversar?</h3>
                <p className="text-gray-300 text-lg mb-4">
                    🚀 Busco novas oportunidades para continuar evoluindo tecnicamente, especialmente em projetos que valorizem boas práticas, código limpo e inovação constante.<br />
                    <span className="font-semibold text-cyan-400">Interesses:</span> Front-end moderno, mobile, design system, acessibilidade, UI/UX, metodologias ágeis (Scrum).
                </p>
                <a
                    href="/Curriculo_Caio_Andrade.pdf"
                    download
                    className="bg-cyan-500 text-white px-8 py-3 rounded shadow hover:bg-cyan-600 transition font-bold text-lg"
                >
                    Baixar Currículo
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
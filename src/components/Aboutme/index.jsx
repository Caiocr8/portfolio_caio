import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaDownload, FaCode, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';

const AboutMe = () => {
    // Configuração de animação padrão para reutilizar
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="mb-8 space-y-20">
            {/* Apresentação */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="flex items-center gap-3 mb-4">
                    <FaCode className="text-3xl text-cyan-400" />
                    <h2 className="text-3xl text-white font-bold tracking-tight">
                        Código limpo, performance e arquitetura robusta
                    </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-cyan-500/20 pl-6 ml-2">
                    Desenvolver software vai além de escrever linhas de código — é sobre criar soluções escaláveis e sustentáveis.<br /><br />
                    Sou <span className="font-semibold text-cyan-400">Caio Andrade</span>, Desenvolvedor Full Stack com sólida experiência em <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">TypeScript</span>, <span className="text-white font-medium">Node.js</span> e mobile com <span className="text-white font-medium">Flutter</span>.<br />
                    Combino uma forte base em Lógica e Orientação a Objetos com um foco obsessivo em <strong>Clean Code</strong> e testes, garantindo entregas de alta performance e fácil manutenibilidade.
                </p>
            </motion.div>

            {/* Linha do tempo */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="flex items-center gap-3 mb-6">
                    <FaLaptopCode className="text-2xl text-cyan-400" />
                    <h3 className="text-2xl text-white font-bold">Minha Jornada Profissional</h3>
                </div>

                <div className="relative border-l-2 border-gray-700 ml-3 space-y-10 pl-8 pb-4">
                    {/* Item 1 */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#121212] bg-cyan-500 shadow-glow-cyan"></span>
                        <span className="text-sm text-cyan-400 font-mono mb-1 block">2021</span>
                        <h4 className="font-bold text-white text-lg">O início no Back-end</h4>
                        <p className="text-gray-400 mt-2">
                            Atuei na <strong>AcadeOne Softwares</strong> otimizando sistemas legados e desenvolvendo novas funcionalidades em PHP e JavaScript. Foi onde consolidei minha base em regras de negócio e desenvolvimento web.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#121212] bg-blue-500"></span>
                        <span className="text-sm text-blue-400 font-mono mb-1 block">2021/2022</span>
                        <h4 className="font-bold text-white text-lg">Experiência Internacional</h4>
                        <p className="text-gray-400 mt-2">
                            Como Junior Developer na <strong>Me At (Israel)</strong>, trabalhei remotamente com foco total em Front-end usando <span className="text-cyan-400">React.js</span>. Vivenciei um ambiente de alta performance, com gestão rigorosa de tempo e entregas ágeis (Scrum).
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#121212] bg-purple-500"></span>
                        <span className="text-sm text-purple-400 font-mono mb-1 block">2022</span>
                        <h4 className="font-bold text-white text-lg">Ciclo completo de desenvolvimento</h4>
                        <p className="text-gray-400 mt-2">
                            Na <strong>Online OS</strong>, participei da concepção à entrega de softwares, resolvendo problemas técnicos complexos e focando na usabilidade e nas necessidades críticas dos stakeholders.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#121212] bg-green-500"></span>
                        <span className="text-sm text-green-400 font-mono mb-1 block">2024/2025</span>
                        <h4 className="font-bold text-white text-lg">Mobile e Arquitetura</h4>
                        <p className="text-gray-400 mt-2">
                            Na <strong>Máxima Tecnologia</strong>, liderei o desenvolvimento de aplicações mobile integradas a APIs REST e Firebase. Apliquei padrões modernos de arquitetura para garantir a escalabilidade dos projetos.
                        </p>
                    </div>

                    {/* Item 5 - Atual */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#121212] bg-yellow-400 animate-pulse"></span>
                        <span className="text-sm text-yellow-400 font-mono mb-1 block">2026 - Atual</span>
                        <h4 className="font-bold text-white text-lg">Especialização Contínua</h4>
                        <p className="text-gray-400 mt-2">
                            Atualmente pós-graduando em <strong>Arquitetura de Software</strong> e <strong>Desenvolvimento Full Stack & Cloud</strong>, buscando elevar o nível técnico das soluções que entrego.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Conquistas e diferenciais */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-8"
            >
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <FaRocket className="text-xl text-cyan-400" />
                        <h3 className="text-xl text-white font-bold">O que me destaca</h3>
                    </div>
                    <ul className="space-y-3">
                        {['Visão Full Stack: domínio de TypeScript, Node.js e React.js',
                            'Experiência internacional e atuação em times ágeis (Scrum)',
                            'Foco em Clean Code, Testes Automatizados e Padrões',
                            'Capacidade de adaptação a diferentes stacks (PHP, C#, Java)'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-400 bg-[#1E1E1E] p-3 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Como soluciono problemas */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <FaRegLightbulb className="text-xl text-yellow-400" />
                        <h3 className="text-xl text-white font-bold">Como soluciono problemas</h3>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">
                        Meu processo une técnica e análise. Antes de codar, entendo o problema a fundo para propor a arquitetura mais eficiente.
                    </p>
                    <ul className="space-y-3">
                        {['Otimização de queries e performance',
                            'Integração segura (REST/Firebase/Cloud)',
                            'Componentização visando reuso',
                            'Design Systems fiéis e responsivos'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-400 bg-[#1E1E1E] p-3 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors">
                                <span className="text-yellow-400 mt-1">⚡</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Interesses e chamada para ação */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-gray-800 p-8 shadow-2xl group"
            >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cyan-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition duration-500"></div>

                <h3 className="text-2xl text-white font-bold mb-4">Vamos construir algo incrível?</h3>
                <p className="text-gray-300 text-lg mb-6 relative z-10">
                    🚀 Busco projetos desafiadores que exijam qualidade técnica e boas práticas. Estou pronto para aplicar meu conhecimento em Arquitetura de Software e Full Stack para gerar valor real.<br /><br />
                    <span className="text-cyan-400 font-mono text-sm bg-cyan-900/20 px-2 py-1 rounded">Stack: React.js • TypeScript • Node.js • Flutter • SQL • Firebase</span>
                </p>

                <a
                    href="/Curriculo_Caio_Andrade.pdf"
                    download
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 font-bold text-lg"
                >
                    <FaDownload />
                    Baixar Currículo Completo
                </a>
            </motion.div>
        </section>
    );
};

export default AboutMe;
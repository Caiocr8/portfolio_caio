import React from 'react'
import ProjectCard from '../ProjectCard';

const projects = [
    {
        title: "Controle Financeiro",
        description: "Um controlador financeiro para colocar entrada e saida de dinheiro feito em React.",
        link: "https://github.com/Caiocr8/controle-financeiro",
    },
    {
        title: "Sistema de Pedidos",
        description: "Um sistema de pedidos para uma lanchonete feito em React com nodejs.",
        link: "https://github.com/Caiocr8/sistema-pedidos",
    }
]

const ProjectsFavs = () => {
    return (
        <section>
            <h2 className="text-2xl text-white font-bold mb-4">Projetos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsFavs
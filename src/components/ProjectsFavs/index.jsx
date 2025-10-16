import React from 'react'
import ProjectCard from '../ProjectCard';

const projects = [
    {
        title: "Nome do Projeto",
        description: "Breve descrição do projeto, tecnologias usadas e impacto.",
        link: "https://github.com/Caiocr8/seu-projeto",
    },
    {
        title: "Outro Projeto",
        description: "Descrição do projeto, tecnologias e resultados alcançados.",
        link: "https://github.com/Caiocr8/outro-projeto",
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
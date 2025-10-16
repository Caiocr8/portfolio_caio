import React from 'react'

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="bg-[#232323] rounded-lg p-5 shadow hover:shadow-lg hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-duration="800">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 mb-2">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
            >
                Ver no GitHub
            </a>
        </div>
    )
}

export default ProjectCard
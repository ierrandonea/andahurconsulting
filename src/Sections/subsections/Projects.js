import React, { useState } from 'react';

const Projects = () => {
    const projectsNational = [
        {
            img: "/static/projects/loop-tech.png",
            name: "Loop Technology Chile",
            area: "Consultora en Mejora Continua Tecnológica",
            date: "2019-2020",
            description: "Originar y establecer nuevas oportunidades comerciales para la empresa. Coordinación e implementación de proyectos TI y procesos de auditoria ISO 27001. Integrar equipos APM como propuestas de mejoras en clientes."
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Líder de Gestión y Procesos",
            date: "2019-2020",
            description: "Coordinar y Planificar el proceso de certificación ISO 9001:2015 Iniciando con establecer las tareas de diagnóstico. Establecer y Administrar documentación y procesos internos."
        },
        {
            img: "/static/projects/transbank.png",
            name: "Transbank",
            area: "Project Manager",
            date: "2016-2019",
            description: "Planificación e implementación de proyectos TI. Administración de equipos multidisciplinarios y proveedores. Organización de actividades para cumplimiento de objetivos de proyectos."
        },
        {
            img: "/static/projects/entel.png",
            name: "Entel",
            area: "PMO",
            date: "2011-2012",
            description: "Consolidación y presentación de reportes de proyecto. Coordinación de actividades de equipo técnico."
        },        
        {
            img: "/static/projects/proyectis.png",
            name: "Proyectis",
            area: "Project Manager",
            date: "2011-2012",
            description: "Implementación de sistema Banner de Sungard High Education, ERP académico en la Universidad de Playa Ancha"
        }
    ];
    return (
        <div className="container mt-5" id="projects">
            <div className="row">
                <div className="col">
                    <h1 className="font-lato">PROYECTOS DESTACADOS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        !!projectsNational && projectsNational.map((projekt, index) => {
                            return (
                                <div className="card rounded-lg p-3 px-md-5 py-4 py-md'3 my-3" key={index}>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-6 col-md-2 mb-3 mb-md-0">
                                            <img src={projekt.img} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-12 col-md-10 d-flex flex-column justify-content-around">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <div className="text-justify">
                                                        <h5 className="card-title">{projekt.name}</h5>
                                                        <p className="card-subtitle">{projekt.area}</p>
                                                    </div>
                                                    <p class="card-text"><small class="text-muted">{projekt.date}</small></p>
                                                </div>
                                                <p className="card-text text-justify ">{projekt.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;
import React, { useState } from 'react';

const Projects = () => {
    const projectsNational = [        
        {
            img: "/static/projects/transbank.png",
            name: "Transbank",
            area: "Project Manager",
            description: ["Implementación de proyectos de TI e infraestructura para industrias B2B y B2C.", "Planificación de proyectos, considerando tiempos, recursos, solicitud de los clientes y toda la estructura de trabajo.", "Negociación de tiempos, recursos y compensaciones con stakeholders.", "Gestión y coordinación entre proveedores y equipos técnicos.", "Administración de equipos multidisciplinarios internos y externos.", "Presentación de proyectos frente a equipos directivos.", "Implementación de infraestructura bajo norma PCI.", "Delegación de proyectos más pequeños a PMO.", "Medición de indicadores asociados a los objetivos planteados.", "Testeo de casos de uso de desarrollo Oracle.", "Liderazgo de equipos bajo metodologías agile y tradicional."]
        },
        {
            img: "/static/projects/provectis.png",
            name: "Provectis",
            area: "Project Manager",
            description: ["Implementación de sistema Banner de Sungard High Education, ERP académico en la Universidad de Playa Ancha.", "Gestión de equipos técnicos y de consultoría para unificar las expectativas de los usuarios con los requerimientos técnicos y de factibilidad.", "Investigación cualitativa de la utilización que los usuarios le dan a la herramienta.", "Levantamiento de los flujos y procesos llevados a cabo por las áreas para la implementación del ERP.", "Identificación de dolores, expectativas y necesidades de los usuarios.", "Generación de mejoras en la herramienta a partir de la investigación con usuarios.", "Planificación y organización de todos los stakeholders, tanto usuarios, autoridades de la universidad, equipos técnicos y de consultoría.", "Aplicación de pruebas de concepto en distintas áreas de la universidad.", "Coordinación de requerimientos de las distintas facultades.", "Aprobación del correcto funcionamiento del sistema."]
        },
        {
            img: "/static/projects/fusion-partners.gif",
            name: "Fusion Partners",
            area: "Project Manager",
            description: ["Administración de proyecto de transformación digital para Entel, representando a la empresa (Fusion Partners) en los procesos de negociación, reuniones de avance y estado del proyecto frente a mesa directiva Entel.", "Gestión y control de equipos de desarrollo basados en múltiples países, entre ellos Colombia, Honduras, Argentina y Chile.", "Administración de recursos y requerimientos para implementación de CRM Siebel Oracle.", "Coordinación de flujos y sincronización de etapas de trabajo con equipos internacionales en pos de establecer un flujo de trabajo continuo.", "Administración de tareas e itineraios de los equipos de cara a cumplir con planificación y mejorar el rendimiento.", "Organizar y evaluar casos de uso para testeo junto a equipo QA."]
        },
        {
            img: "/static/projects/bancoestado.png",
            name: "Banco Estado",
            area: "Project Manager",
            description: ["Gestión de equipos de desarrollo de Infraestructura TI del banco.", "Liderar y monitorear el proceso migración de sistemas operativos y de gestión interna a nivel nacional.", "Coordinación de equipos de trabajo ofrecidos por el proveedor (Microsoft) y jefaturas de áreas a migrar dentro de la organización.", "Identificación de oportunidades de mejora continua en procesos y herramientas, además de aplicaciones y productos tecnológicos a migrar.", "Negociación de procesos, tiempos y requerimientos para clientes internos y externos.","Manejo de presupuestos, reportería e informes de control."]
        },
        {
            img: "/static/projects/entel.png",
            name: "Entel",
            area: "PMO - Gerencia de Tecnología",
            description: ["Planificación de proyectos en base a los objetivos solicitados.", "Organización de las tareas, tiempos y recursos a utilizar para conseguir los objetivos.", "Coordinación de actividades de equipo técnico.", "Seguimiento de proyectos, tareas y actividades dentro de la planificación.", "Evaluación continua de los estados de avance.", "Identificación de brechas entre el estado actual de los proyectos y el estado deseado.", "Consolidación y presentación de reportes de proyecto.", "Generación y presentación de informes de proyecto y trazabilidad."]
        },
        {
            img: "/static/projects/loop-tech.png",
            name: "Loop Technology Chile",
            area: "Consultora en Mejora Continua Tecnológica",
            description: ["Prospección de clientes potenciales y establecimiento de alianzas comerciales.", "Administración y control de equipos APM para implementación de mejoras en plataformas de clientes externos.", "Gestión de equipos TI para outsourcing de procesos de desarrollo a clientes externos.", "Evaluación y planificación de proyectos de certificación ISO 27001."]
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Líder de Gestión y Procesos",
            description: ["Levantamiento de información previa a diagnóstico inicial para proceso de certificación ISO 9001:2015.", "Diagnóstico y análisis de brechas GAP.", "Generar plan de acción para matriz de riegos y procesos estratégicos.", "Diseñar esquema de trabajo y funcionamiento para proceso de certificación."]
        }
    ];
    return (
        <section className="gradient-wrapper">
            <div className="container py-5" id="projects">
                <div className="row">
                    <div className="col">
                        <h1 className="font-lato">PROYECTOS DESTACADOS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            !!projectsNational && projectsNational.map((projekt, index) => {
                                let projektDescription = projekt.description.map((item, index) => {
                                    return (
                                        <li key={index} className="my-3">{item}</li>
                                    )
                                })
                                return (
                                    <div className="card rounded-lg p-3 px-md-5 py-4 py-md-3 my-3 border-0" key={index}>
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
                                                    </div>
                                                    <ul>
                                                        {projektDescription}
                                                    </ul>
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
        </section>
    )
}

export default Projects;
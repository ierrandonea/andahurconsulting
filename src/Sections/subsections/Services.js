import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="bg-deepblue pt-5 pb-3" id="consulting">
            <div className="container text-white text-justify">
                <div className="row">
                    <div className="col">
                        <h1 className="font-lato">ROLES CLAVE</h1>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <p className="fs-14">Para mejorar los procesos internos de cada organización, además de contar con el respaldo de los directivos, es útil tener una alta capacidad de adaptación, habilidades para negociar y movilizar equipos de trabajo, motivando el desarrollo del componente humano en cada proyecto. Para estos desafíos, puedo desempeñarme en múltiples roles claves, y cumplir con los objetivos de cada proyecto:</p>
                    </div>
                </div>
                <div class="row">
                    <div className="col-12 mb-3">
                        <h4>Consultoría TI</h4>
                        <p>
                            <strong className="text-emphasis fw-500">Asesoro</strong> en múltiples áreas relacionadas a la gestión de proyectos y sistemas, identificando y proponiendo estrategias efectivas que impacten en el negocio y en la consecución de los objetivos esperados por cada organización, gestionando tanto factores de valor como disminuyendo la brecha en factores higiénicos. Mi orientación en este ámbito está en identificar nuevas oportunidades, que no necesariamente son parte del “core” del negocio, pero que tienen el potencial de mejorar sustancialmente el funcionamiento del mismo.
                        </p>
                    </div>
                    <div className="col-12 mb-3">
                        <h4>Implementación de Proyectos</h4>
                        <p>
                            <strong className="text-emphasis fw-500">Gestiono</strong> equipos de trabajo enfocándome en aprovechar el potencial individual de cada miembro del equipo, de cara a lograr los objetivos de cada proyecto de la mejor forma posible. Utilizo tanto estándares PMI como metodologías Agile, liderando equipos multidisciplinarios y facilitando células de trabajo especializadas, según los requerimientos de cada proyecto.
                        </p>
                    </div>
                    <div className="col-12 mb-3">
                        <h4>Sistemas de Gestión</h4>
                        <p>
                            <strong className="text-emphasis fw-500">Audito</strong> internamente bajo normas ICE/ISO, apoyando al cliente en la mejora de sus procesos, aprovechando al máximo los recursos disponibles y potenciando las labores que se realizan. También gestiono la planificación y ejecución de proyectos para certificaciones, ofreciendo soluciones de diagnóstico y mejora continua.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4>PMO</h4>
                        <p>
                            <strong className="text-emphasis fw-500">Apoyo</strong> y complemento la gestión de los jefes de proyecto, agilizando los procesos de negociación y comunicación con stakeholders, ofreciendo una nueva perspectiva que ayude a comprender el proyecto y sus implicaciones para sus clientes internos y externos. Desarrollo estrategias de mitigación y matrices de riesgo, facilitando actividades y velando por la actualización de documentos y lecciones aprendidas.
                        </p>
                    </div>
                </div>
                <div class="row my-4">
                    <div className="col text-center">
                        <Link className="btn btn-lg btn-pink py-2 px-4" to="/contacto">Hablemos</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <hr />
                <div class="row justify-content-around">
                    <div className="col-12 col-md-6 c-pink pl-5">
                        <span className="pl-lg-5"> 2021 Cecilia Andahur, derechos reservados.</span>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-around">
                        <a href="mailto:cecilia.andahur@gmail.com" target="_blank" className="d-flex align-items-center c-pink">
                            <i class="fas fa-at mr-2"></i> Email
                                </a>
                        <a href="https://wa.link/og9lbz" target="_blank" className="d-flex align-items-center c-pink mx-3">
                            <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                                </a>
                        <a href="https://www.linkedin.com/in/cecilia-andahur-del-barrio-48b40a35/" target="_blank" className="d-flex align-items-center c-pink">
                            <i class="fab fa-linkedin-in mr-2"></i> LinkedIn
                                </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
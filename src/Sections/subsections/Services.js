import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="bg-deepblue pt-5 pb-3 mt-5" id="consulting">
            <div className="container text-white text-justify">
                <div className="row">
                    <div className="col">
                        <h1 className="font-lato">ROLES CLAVE</h1>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <p className="fs-14">Puedo desempeñarme en múltiples roles clave para ayudar a lograr los objetivos de cada proyecto:</p>
                    </div>
                </div>
                <div class="row">
                    <div className="col-12 mb-3">
                        <h4>Consultoría</h4>
                        <p>Asesoro en múltiples áreas relacionadas a la gestión de proyectos y sistemas, para proponer mejoras y soluciones frente a carencias. Mi orientación en este ámbito está en entregar nuevas perspectivas que no son parte del “core” del negocio, pero tienen el potencial de mejorar sustancialmente el funcionamiento del mismo.</p>
                    </div>
                    <div className="col-12 mb-3">
                        <h4>Implementación de Proyectos</h4>
                        <p>
                        Como Project Manager, me he especializado en gestionar equipos de trabajo enfocándome en aprovechar el potencial individual de cada miembro del equipo, de cara a lograr los objetivos de cada proyecto de la mejor forma posible. A través del uso de Metodologías Agile, gestiono células de trabajo especializadas, selección de requisitos, planificación de las iteraciones de desarrollo, ejecución de la iteración, inspección y adaptación.
                        </p>
                    </div>
                    <div className="col-12 mb-3">
                        <h4>Sistemas de Gestión</h4>
                        <p>Realizo auditorias de diagnóstico para establecer brechas y plan de mejoras. Gestiono la planificación y ejecución de proyectos para certificaciones. Y ofrezco soluciones para la mantención y mejora continua del sistema.</p>
                    </div>
                    <div className="col-12">
                        <h4>PMO</h4>
                        <p className="text-justify">
                        Servicio de apoyo y complementación a la gestión de los jefes de proyecto, agilizando los procesos de negociación y comunicación con stakeholders, ya sean clientes internos como externos. A través del desarrollo de estrategias de mitigación y la creación de reportes de avance y matrices de riesgo. Así como también actuar de facilitador de actividades, actualización de documentos y lecciones aprendidas.
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
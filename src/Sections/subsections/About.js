import React from 'react';

const About = () => {
    return (
        <section className="gradient-wrapper">
            <div className="container pb-5" id="about">
                <div className="row pb-5">
                    <div className="col font-lato">
                        <h1><span className="c-blue fw-400">CECILIA </span><span className="c-purple fw-600">ANDAHUR</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <picture>
                            <source media="(max-width:767px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-about-2.webp" />
                            <source media="(max-width:991px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-about-3.webp" />
                            <img className="img-fluid w-100 card-img" src="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-about-1.webp" alt="" />
                        </picture>
                    </div>
                    <div className="col-12 col-lg-8 d-flex mt-5 mt-lg-0 flex-column justify-content-between fs-14 text-justify">
                        <h5>"Hago que las cosas pasen"</h5>
                        <p className="mt-3 mt-lg-0">
                            Ingeniero en Finanzas, de la Universidad Diego Portales. Certificada Scrum Master y DevOps, Auditor interno para Sistemas Integrados de Gestión ISO9001:2015 – ISO14001:2015 ISO 45001:2018 - ISO 27001:2013. Diplomada en gestión de riesgo operacionales. Estudios formales PMP. Idiomas Inglés y Francés.
                        </p>
                        <p>
                            Soy una profesional con amplios conocimientos en implementación de proyectos. Durante los más de 15 años de experiencia que tengo en el mercado de prestación de servicios en tecnología, he participado en la implementación de proyectos en sistemas ERP y TI, así como en infraestructura y desarrollo.
                        </p>
                        <p>
                            Durante mi carrera he tenido la oportunidad de liderar equipos en múltiples niveles de especialización tecnológica, desde grupos técnicos hasta equipos de ingenieros, para la implementación de proyectos de gran envergadura en organizaciones bancarias, empresas de telecomunicaciones y de servicios.
                        </p>
                        <p>
                            También he podido desempeñarme como Jefe PMO para control y apoyo de planes y propuestas en mejoras de procesos y administración de equipos, implementación de procesos, evaluaciones en gestión y procesos para aplicación de normas ISO.
                        </p>
                        <p>
                            Mi experiencia y trayectoria me permiten relacionarme de forma directa con todos los stakeholders relacionados a los procesos de implementación tecnológica, de forma tal que cada proyecto alcance su máximo nivel de rendimiento y trazabilidad durante su desarrollo.
                        </p>
                        <p>
                            Poseo herramientas clave para mejorar los procesos internos de cada organización, ofreciendo una alta capacidad de adaptación, junto a habilidades para negociar y movilizar equipos de trabajo desde el componente humano de cada proyecto.
                        </p>
                        <div class="row mt-3 mt-lg-4">
                            <div className="col-12 col-lg-10">
                                <img className="img-fluid" src="/static/cecilia-andahur-certificaciones.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
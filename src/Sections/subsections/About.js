import React from 'react';

const About = () => {
    return (
        <section className="gradient-wrapper">
            <div className="container pb-5" id="about">
                <div className="row pb-5">
                    <div className="col font-lato">
                        <h1 className="c-blue">CECILIA <span className="c-purple">ANDAHUR</span></h1>
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
                        <h5>"Me apasiona liderar equipos hacia metas ambiciosas"</h5>
                        <p className="mt-3 mt-lg-0">
                            Soy una profesional con amplios conocimientos en implementación de proyectos, durante los más de 15 años de experiencia que tengo en el mercado de prestación de servicios en tecnología, he participado en la implementación de proyecto en sistemas ERP y TI, así como infraestructura y desarrollo.
                        </p>
                        <p>
                            Durante mi carrera he tenido la oportunidad de liderar equipos en múltiples niveles de especialización tecnológica, desde grupos técnicos hasta equipos de ingenieros, para la implementación de proyectos de gran envergadura en salas DataCenter de organizaciones bancarias, empresas de telecomunicaciones y empresas de ingeniería de sistemas.
                        </p>
                        <p>
                            También he podido desempeñarme como Jefe PMO para control y apoyo de proyectos y propuestas en mejoras de procesos y administración de equipos, implementación de procesos, evaluaciones en gestión y procesos para aplicación de normas ISO.
                        </p>
                        <p>
                            Mi experiencia y trayectoria me permiten relacionarme de forma directa con todos los stakeholders relacionados a proyectos de implementación tecnológica, de forma tal que cada proyecto alcance su máximo nivel de rendimiento y trazabilidad durante su desarrollo.
                        </p>
                        <p>
                            Poseo estudios formales en gestión PMI, certificada como Scrum Master y DevOps. Diplomada en Administración de Riesgos en la Universidad de Chile y Comercio Internacional en la Universidad de Santiago de Chile.
                        </p>
                        <div class="row mt-3 mt-lg-0">
                            <div className="col-12 col-lg-10">
                                <img className="img-fluid" src="/static/cecilia-andahur-certificaciones.png" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
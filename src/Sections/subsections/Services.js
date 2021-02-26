import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="bg-deepblue py-5 mt-5" id="consulting">
            <div className="container text-white">
                <div className="row">
                    <div className="col">
                        <h1 className="font-lato">CONSULTORÍA</h1>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <p className="fs-14">Ofrezco servicios de consultoría en gestión de proyectos a la medida de las necesidades de cada organización, entre los cuales están:</p>
                    </div>
                </div>
                <div class="row">
                    <div className="col-12 mb-3">
                        <h4>Implementación de Proyectos</h4>
                        <p className="text-justify">
                            Project Manager, siguiendo las mejores practicas del PMI, puedo planiificar y gestionar equipos de trabajo para el
                            proposito requerido. O bien ser parte del equipo implementador aportando en cada fase.
                            Metodologia Agile, gestioando celulas de trabajo, seleccion de requisito, planificacion de la iteracion, ejecucion de
                            la iteracion, inspeccion y adaptacion
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 mb-3">
                        <h4>Sistemas de Gestión</h4>
                        <ul>
                            <li>Auditorias de diagnostico para establecer brechas y plan de mejoras.</li>
                            <li>Planificacion y ejecucion de proyecto para certificaciones.</li>
                            <li>Mantencion y mejora continua del sistema</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6 mb-3">
                        <h4>PMO</h4>
                        <p className="text-justify">
                            Apoyo a la gestion de los jefes de proyecto, agilizando la comunicacion hacia interesados, creando los reportes de
                            avace, levantando riesgo, generando mitigaciones.
                            Facilitador de actividades y enlace con interesados, actualizacion de documentos y lecciones
                        </p>
                    </div>
                </div>
                <div class="row mt-4">
                    <div className="col text-center">
                        <Link className="btn btn-lg btn-pink py-2 px-4" to="/contacto">Hablemos</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0">
                <div class="row mt-5">
                    <div className="col">
                        <hr />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
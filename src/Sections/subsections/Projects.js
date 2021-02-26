import React, { useState } from 'react';

const Projects = () => {
    const [state, setstate] = useState(0);
    const projectsNational = [
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Gestión y Procesos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Loop Technology Chile",
            area: "Servicios Informáticos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/transbank.png",
            name: "Transbank",
            area: "Project Manager",
            date: "2016-2019",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/entel.png",
            name: "Entel",
            area: "PMO",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        }
    ];
    const projectsInternational = [
        {
            img: "/static/projects/geodis.png",
            name: "Elecmatic2 Ltda.",
            area: "Gestión y Procesos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Gestión y Procesos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Gestión y Procesos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        },
        {
            img: "/static/projects/elecmatic.png",
            name: "Elecmatic Ltda.",
            area: "Gestión y Procesos",
            date: "2019-2020",
            description: "A cargo de la creación de matriz de proceso, entrevistas con personal clave para definir roles y responsabilidades. En conjunto con prevencionista de riesgos, se trabaja en identificar mediante entrevistas, reuniones y matrices los procesos involucrados y los riesgos, su prevención y/o mitigación."
        }
    ];
    return (
        <div className="container mt-5" id="projects">
            <div className="row">
                <div className="col">
                    <h1 className="font-lato">PROYECTOS DESTACADOS</h1>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <p className="fs-14">Durante mi carrera he trabajado con múltiples clientes que pueden avalar mi compromiso, profesionalismo y resultados para sus propias organizaciones, algunos de mis proyectos son:</p>
                </div>
            </div>
            <div className="row justify-content-between mb-5">
                <div className="col-6 col-md-4">
                    <span className={"btn btn-outline-secondary w-100" + (state == 0 ? " btn-purple" : " btn-outline-purple")} onClick={() => setstate(0)}>PROYECTOS NACIONALES</span>
                </div>
                <div className="col-6 col-md-4">
                    <span className={"btn btn-outline-secondary w-100" + (state == 1 ? " btn-purple" : " btn-outline-purple")} onClick={() => setstate(1)}>PROYECTOS INTERNACIONALES</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        state == 0 ? (!!projectsNational && projectsNational.map((projekt, index) => {
                            return (
                                <div className="card rounded-lg py-3 my-3" key={index}>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-8 col-md-4 mb-3 mb-md-0">
                                            <img src={projekt.img} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-12 col-md-7 d-flex flex-column justify-content-around">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <div>
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
                        }))
                            :
                            (!!projectsInternational && projectsInternational.map((projekt, index) => {
                                return (
                                    <div className="card rounded-lg py-3 my-3" key={index}>
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-8 col-md-4 mb-3 mb-md-0">
                                                <img src={projekt.img} alt="" className="img-fluid" />
                                            </div>
                                            <div className="col-12 col-md-7 d-flex flex-column justify-content-around">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <div>
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
                            }))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;
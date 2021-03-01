import React from 'react';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
    return (
        <div className="jumbotron jumbotron-fluid p-0 card rounded-0">
            <picture>
                <source media="(max-width:767px)" srcset="/static/cecilia-andahur-consultoria-project-manager-PMO-mejora-continua-gestion-proyectos-2.webp" />
                <source media="(max-width:991px)" srcset="/static/cecilia-andahur-consultoria-project-manager-PMO-mejora-continua-gestion-proyectos-3.webp" />
                <img className="img-fluid w-100 card-img" src="/static/cecilia-andahur-consultoria-project-manager-PMO-mejora-continua-gestion-proyectos-1.webp" alt="" />
            </picture>
            <div className="card-img-overlay d-flex flex-column justify-content-center  ">
                <div className="card-title">
                    <h1>AYUDO A OPTIMIZAR TU ORGANIZACIÓN</h1>
                    <h5>SISTEMAS DE GESTION - IMPLEMENTACION DE PROYECTOS - PMO - MEJORA CONTINUA</h5>
                </div>
            </div>
        </div>
    )
}

export default Banner;
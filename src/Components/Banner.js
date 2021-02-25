import React from 'react';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
    return (
        <div className="jumbotron jumbotron-fluid p-0 card rounded-0">
            <img className="img-fluid w-100 card-img" src="/static/cecilia-andahur-consultoria-project-manager-PMO-mejora-continua-gestion-proyectos-1.jpg" alt="" />
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
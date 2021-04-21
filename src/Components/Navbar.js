import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow py-4 px-5">
      <Link className="navbar-brand font-weight-bold" to="/">
        <div className="font-lato mb-0">
          <span className="c-blue fw-400">CECILIA </span><span className="c-purple fw-600">ANDAHUR</span>
        </div>
        <span className="small text-secondary fs-12 d-none d-xl-flex">Project Manager | PMO | Consultoría en Sistemas de Gestión y Mejora Continua</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto d-flex align-items-center font-lato fw-600">
          <li className="nav-item mr-lg-5">
            <Link
              className="nav-link"
              to="/" >
              SOBRE MÍ
            </Link>
          </li>
          <li className="nav-item mr-lg-5">
            <Link
              className="nav-link"
              to="/roles-clave">
              ROLES CLAVE
                </Link>
          </li>
          <li class="nav-item mr-lg-5">
            <Link
              className="nav-link"
              to="/proyectos">
              PROYECTOS
            </Link>
          </li>
          <li className="nav-item btn btn-outline-pink">
            <Link
              className="nav-link p-0"
              to="/contacto">
              HABLEMOS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
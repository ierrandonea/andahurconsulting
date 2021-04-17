import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';
import { Context } from '../store/appContext';

const Navbar = () => {
  const { store } = useContext(Context);
  let location = useLocation().pathname
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow py-4 px-5">
      <Link className="navbar-brand font-weight-bold" to="/">
        <div>
          <div className="font-lato mb-n2">
            <span className="c-blue fw-400">CECILIA </span><span className="c-purple fw-600">ANDAHUR</span>
          </div>
          <span className="small text-secondary fs-12">Project Manager | PMO | Consultoría en Sistemas de Gestión y Mejora Continua</span>
        </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto d-flex align-items-center font-lato fw-600">
          <li className={"nav-item mr-lg-5" + (store.activeTabs === "home" ? " active" : "")}>
            {
              location === "/" ?
                <Nav
                  className="nav-link mr-l"
                  to="about"
                  activeClass="selected"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={200}>
                  SOBRE MÍ
                </Nav>
                :
                <Link
                  className="nav-link"
                  to="/" >
                  SOBRE MÍ
                </Link>
            }
          </li>          
          <li className="nav-item mr-lg-5">
            {
              location === "/" ?
                <Nav
                  className="nav-link"
                  to="consulting"
                  activeClass="selected"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}>
                  ROLES CLAVE
                </Nav>
                :
                <Link
                  className="nav-link"
                  to="/#consulting">
                  ROLES CLAVE
                </Link>
            }
          </li>
          <li class="nav-item mr-lg-5">
            {
              location === "/" ?
                <Nav
                  className="nav-link"
                  to="projects"
                  activeClass="selected"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}>
                  PROYECTOS
                </Nav>
                :
                <Link
                  className="nav-link"
                  to="/#projects">
                  PROYECTOS
                </Link>
            }
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
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    let media = window.matchMedia('(min-width: 992px)');
    const [state, setState] = useState(0);
    function sendEmail(e) {
        e.preventDefault();
        if (!!e.target) {
            emailjs.sendForm('gmail_ceci', 'template_p5pbv5q', e.target, 'user_4m5W7xCUSUSNmmCSM3UQX')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setState(1);
            setTimeout(() => {
                setState(0);
            }, 4000);
        } else {
            setState(1);
            setTimeout(() => {
                setState(0);
            }, 2000);
        }
    }
    return (
        <>
            <section className="jumbotron-fluid card rounded-0 border-0">
                <picture>
                    <source media="(max-width:767px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-2.webp" />
                    <source media="(max-width:991px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-3.webp" />
                    <img className="img-fluid w-100 card-img" src="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-1.webp" alt="" />
                </picture>
                <div className={"container d-flex flex-column justify-content-end" + (media.matches ? " card-img-overlay" : "")}>
                    <div className="row justify-content-lg-end mt-5 mt-lg-0 pl-lg-5">
                        <div className="col-12 col-lg-6">
                            <h1 className="font-lato display-4">HABLEMOS</h1>
                        </div>
                    </div>
                    <div className="row my-3 justify-content-lg-end pl-lg-5">
                        <div className="col-12 col-lg-6">
                            <p>
                                Si lo que viste te resultó interesante y quieres que trabajemos juntos,  puedes contactarme a través de mis redes sociales o completando el formulario a continuación:
                        </p>
                        </div>
                    </div>
                    <div className="row pl-lg-5 justify-content-lg-end">
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="row pb-4">
                                <div className="col-12 d-flex justify-content-around">
                                    <a href="mailto:cecilia.andahur@gmail.com" target="_blank" className="btn btn-pink px-3">
                                        <i className="fas fa-at"></i> Email
                                </a>
                                    <a href="https://wa.link/og9lbz" target="_blank" className="btn btn-pink px-3">
                                        <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                    <a href="https://www.linkedin.com/in/cecilia-andahur-del-barrio-48b40a35/" target="_blank" className="btn btn-pink px-3">
                                        <i className="fab fa-linkedin-in"></i> LinkedIn
                                </a>
                                </div>
                            </div>
                            <form onSubmit={e => sendEmail(e)}>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <input type="text" className="form-control" name="first_name" placeholder="Nombre" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <input type="text" className="form-control" name="last_name" placeholder="Apellido" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Correo electrónico" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Asunto" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Mensaje..."></textarea>
                                    </div>
                                </div>
                                <div className="row mb-4 mb-lg-0">
                                    <div className="col">
                                        <button type="submit" className="btn btn-purple">Enviar</button>
                                    </div>
                                </div>
                                {
                                    state == 1 ?
                                        <div class="row mt-3">
                                            <div className="col">
                                                <div class={"alert alert-pink alert-dismissible " + (state == 1 ? "fade show" : "fade hide")} role="alert">
                                                    <strong>Gracias por tu mensaje,</strong> me pondré en contacto contigo en el menor tiempo posible.
                                                <button type="button" class="close" onClick={() => setState(0)}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section >

            <div className="container-fluid pb-3 pt-1 bg-deepblue">
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
        </>
    )
}

export default Contact;
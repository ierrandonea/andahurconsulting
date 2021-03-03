import React from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    let media = window.matchMedia('(min-width: 992px)');
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_fj2g1ow', e.target, 'user_4m5W7xCUSUSNmmCSM3UQX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.recet();
    }
    return (
        <section className="jumbotron-fluid card rounded-0 border-0">
            <picture>
                <source media="(max-width:767px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-2.webp" />
                <source media="(max-width:991px)" srcset="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-3.webp" />
                <img className="img-fluid w-100 card-img" src="/static/cecilia-andahur-consultoria-gestion-proyectos-PMO-mejora-continua-contacto-1.webp" alt="" />
            </picture>
            <div className={"container d-flex flex-column justify-content-end mb-md-5" + (media.matches ? " card-img-overlay" : "")}>
                <div className="row justify-content-lg-end mt-5 mt-lg-0 pl-lg-5">
                    <div className="col-12 col-lg-6">
                        <h1 className="font-lato display-3">HABLEMOS</h1>
                    </div>
                </div>
                <div className="row my-5 justify-content-lg-end pl-lg-5">
                    <div className="col-12 col-lg-6">
                        <p>
                            Si lo que viste te resultó interesante y quieres que trabajemos juntos,  puedes contactarme a través de mis redes sociales o completando el formulario a continuación:
                        </p>
                    </div>
                </div>
                <div className="row pl-lg-5 justify-content-lg-end">
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <div class="row pb-5">
                            <div className="col-12 d-flex justify-content-around">
                                <a href="mailto:cecilia.andahur@gmail.com" target="_blank" className="btn btn-pink px-3">
                                    <i class="fas fa-at"></i> email
                                </a>
                                <a href="https://wa.link/og9lbz" target="_blank" className="btn btn-pink px-3">
                                    <i class="fab fa-whatsapp"></i> whatsaap
                                </a>
                                <a href="https://www.linkedin.com/in/cecilia-andahur-del-barrio-48b40a35/" target="_blank" className="btn btn-pink px-3">
                                    <i class="fab fa-linkedin-in"></i> linkedin
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
                            <div class="row">
                                <div className="col form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Correo electrónico" />
                                </div>
                            </div>
                            <div class="row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" name="subject" placeholder="Asunto" />
                                </div>
                            </div>
                            <div class="row">
                                <div className="col form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje..."></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div className="col">
                                    <button type="submit" class="btn btn-purple">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact;
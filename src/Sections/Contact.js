import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    let media = window.matchMedia('(min-width: 992px)');
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
    });
    const [confirmation, setConfirmation] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }
    const handleValidation = () => {
        const { firstName, lastName, email, subject, message } = state;
        if (firstName !== '' && lastName !== '' && email !== '' && subject !== '' && message !== '') return true;
        return false;
    }
    function sendEmail(e) {
        e.preventDefault();
        if (!!e.target) {
            emailjs.sendForm('gmail_ceci', 'template_p5pbv5q', e.target, 'user_4m5W7xCUSUSNmmCSM3UQX')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setState({
                firstName: '',
                lastName: '',
                subject: '',
                message: ''
            })
            setConfirmation(true)
            setTimeout(() => {
                setConfirmation(false)
            }, 4000);
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            value={state.firstName}
                                            onChange={e => handleChange(e)}
                                            placeholder="Nombre"
                                            required />
                                    </div>
                                    <div className="col-6 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            value={state.lastName}
                                            onChange={e => handleChange(e)}
                                            placeholder="Apellido"
                                            required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={state.email}
                                            onChange={e => handleChange(e)}
                                            placeholder="Correo electrónico"
                                            required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            value={state.subject}
                                            onChange={e => handleChange(e)}
                                            placeholder="Asunto"
                                            required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="5"
                                            value={state.message}
                                            onChange={e => handleChange(e)}
                                            placeholder="Mensaje..."></textarea>
                                    </div>
                                </div>
                                <div className="row mb-4 mb-lg-0">
                                    <div className="col">
                                        <button type="submit" className={"btn btn-purple " + (handleValidation() == false ? "disabled" : "")}>Enviar</button>
                                    </div>
                                </div>
                                {
                                    confirmation == true && (
                                        <div class="row mt-3">
                                            <div className="col">
                                                <div class={"alert alert-pink alert-dismissible " + (confirmation == true ? "fade show" : "fade hide")} role="alert">
                                                    <strong>Gracias por tu mensaje,</strong> me pondré en contacto contigo en el menor tiempo posible.
                                                    <button type="button" class="close" onClick={() => setState(0)}>
                                                        <span aria-hidden="true" onClick={() => setConfirmation(false)}>&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact;
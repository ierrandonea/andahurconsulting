import React from 'react';

const Contact = () => {
    return (
        <section className="jumbotron-fluid card rounded-0 border-0">
            
            <picture>
                <source media="(max-width:767px)" srcset="https://via.placeholder.com/576x1280" />
                <source media="(max-width:991px)" srcset="https://via.placeholder.com/768x1080" />
                <img className="img-fluid w-100 card-img" src="https://via.placeholder.com/1920x1280" alt="" />
            </picture>
            <div className="container card-img-overlay d-flex flex-column justify-content-end mb-md-5">
                <div className="row">
                    <div className="col">
                        <h1 className="font-lato">HABLEMOS</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <p className="fs-14">
                            Si lo que viste te resultó interesante y quieres que trabajemos juntos,  puedes contactarme a través de mis redes sociales o completando el formulario a continuación:
                        </p>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        RRSS
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-6 form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Nombre" />
                                </div>
                                <div className="col-6 form-group">
                                    <input type="text" className="form-control" id="last_name" placeholder="Apellido" />
                                </div>
                            </div>
                            <div class="row">
                                <div className="col form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico" />
                                </div>
                            </div>
                            <div class="row">
                                <div className="col form-group">
                                    <input type="email" className="form-control" id="subject" placeholder="Asunto" />
                                </div>
                            </div>
                            <div class="row">
                                <div className="col form-group">
                                    <textarea className="form-control" id="Message" rows="5" placeholder="Mensaje..."></textarea>
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
        </section>
    )
}

export default Contact;
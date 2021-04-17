import React from 'react';

const Footer = () => {
    return (
        <section className="bg-deepblue">
            <div className="container-fluid pt-1 pb-3">
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
        </section>
    );
};

export default Footer;
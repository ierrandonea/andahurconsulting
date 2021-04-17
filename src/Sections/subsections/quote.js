import React from 'react';

const Quote = () => {
    return (
        <section className="bg-blue py-5">
            <div className="container border border-white border-wide p-5 my-3 text-white" id="quoted_rectangle">
                <i class="fas fa-angle-double-right fa-4x bg-blue text-justify" id="absolute_1"></i>
                <p>
                    Ser consultora es poner a disposición de otros los conocimientos, vivencias y habilidades que se han obtenido en el tiempo, en años de trabajar en distintos cargos y empresas.
                </p>
                <p>
                    Gracias a mi amplia experiencia en diversos proyecto, he desarrollado una mirada multisistémica e interdisciplinaria que me permite conseguir éxito en cada proyecto uniendo el enfoque en los equipos y en los resultados de negocio.
                </p>
                <i class="fas fa-angle-double-left fa-4x bg-blue" id="absolute_2"></i>
            </div>
        </section>
    )
}

export default Quote;



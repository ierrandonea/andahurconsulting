import React from 'react';

const Quote = () => {
    return (
        <section className="bg-blue py-5">
            <div className="container border border-white border-wide p-5 my-3 text-white text-center" id="quoted_rectangle">
                <i class="fas fa-angle-double-right fa-4x bg-blue" id="absolute_1"></i>
                <p>
                    Ser consultora es poner a disposición de otros, los conocimientos, experiencia y habilidades que uno ha obtenido en el tiempo, en años de trabajar en distintos cargos y empresas.
                    <br /><br />
                    Cada cargo desempeñado, cada equipo en que participé, cada éxito y cada fracaso, respaldan mi desarrollo, para entregar una experiencia de consultoría enfocada a hacer que la organización con la que trabaje alcance el éxito en sus procesos de implementación tecnológica.
                    </p>
                <i class="fas fa-angle-double-left fa-4x bg-blue" id="absolute_2"></i>
            </div>
        </section>
    )
}

export default Quote;
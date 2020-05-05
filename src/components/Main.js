import React from 'react';
import PropTypes from 'prop-types';


class Main extends React.Component {

    render() {
        return (
            <main className="container__page--main" id="main" role="main">
                <div className="container__general">
                    <div className="container__section--main">

                        <h2 className="main__title text__main--title" >
                            beatriz pérez fernandez
                        </h2>
                        <h3 className="main__title text__main--subtitle" >
                            junior front-end developer
                        </h3>


                        <div className="main__content">
                            <p className="main__text1 text__base">
                                ¡Hola!
                            </p>
                            <p className="main__text1 text__base">
                                Bienvenido a mi portfolio online.
                                He desarrollado esta pequeña aplicación web para mostrarte mi recorrido y algunos de los proyectos en los que he trabajado por el camino que va de la arquitectura al FrontEnd.
                                Espero que te gusten.
                                Si es así, no dudes en contármelo! 
                                Encontratrás mi información de contacto y redes sociales más abajo.


                            </p>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

Main.defaultProps = {
    mainTitle: 'sección principal'
}
Main.propTypes = {
    mainTitle: PropTypes.string
}


export default Main;

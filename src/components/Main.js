import React from 'react';
import PropTypes from 'prop-types';


class Main extends React.Component {

    render() {
        return (
            <main className="container__page--main" id="main" role="main">
                <div className="container__general">
                    <div className="container__section--main">

                        <h2 className="main__title text__main--title" >
                            brief story of a beginning
                        </h2>

                        <div className="main__content">
                            <p className="main__text1 text__main">
                                Arquitecto y apasionada del diseño en todas sus vertientes, 
                                mi <span className="text__main--bold">espíritu aventurero</span> me ha llevado a colaborar en multitud de proyectos diferentes en España y China. 
                            </p>
                            <p className="main__text2 text__main">
                                Para mí el cambio representa la oportunidad y el <span className="text__main--bold">reto</span>,<br/>
                                 es siempre motivador.
                            </p>
                            <p className="main__text3 text__main">
                                Con mucha <span className="text__main--bold">iniciativa</span>, facilidad para la <span className="text__main--bold">planificación</span> y <span className="text__main--bold">creatividad</span> aplicada a la resolución de problemas, 
                                tras una década de edificación y urbanismo decido dar un giro hacia la <span className="text__main--bold">arquitectura digital</span> y el <span className="text__main--bold">FrontEnd</span> en busca de una profesión igualmente apasionante pero más flexible y dinámica.
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

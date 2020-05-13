import React from 'react';


class Main extends React.Component {

    render() {
        const scrollY = this.props.info;
        let boxOpacity = scrollY < 350 ? (scrollY - 50) / 300 : 1 ;
        let textPosition = -60 + (100 * boxOpacity);

        let colorBoxStyle = {
            opacity: boxOpacity
        }
        let textBoxStyle = {
            left: `${textPosition}vw`
        }

        return (
            <main className="container__page--main" id="main" role="main">
                <div className="colorBox" style={colorBoxStyle}>
                </div>
                <div className="container__general">
                    <div className="container__section--main">

                        <h2 className="text__main--name" >
                            beatriz perez fernandez
                        </h2>
                        <h3 className="text__main--position" >
                            junior frontend developer
                        </h3>



                        <div className="textBox" style={textBoxStyle}>
                            <p className="main__text text__main--introduction">
                                ¡Hola!
                            </p>
                            <p className="main__text text__main--introduction">
                                Este es mi portfolio online.<br/>
                                ¡Me alegra verte por aquí!
                            </p>
                            <p className="main__text text__main--introduction">
                                He desarrollado esta pequeña aplicación web, <br/> 
                                para mostrarte mi recorrido y algunos de los proyectos <br/>
                                en los que he trabajado por el camino que va <br/>
                                de la Arquitectura al FrontEnd.
                                
                            </p>
                            <p className="main__text text__main--introduction">
                                Espero que te gusten.<br/>
                                Si es así, no dudes en contármelo y
                                contacta conmigo! 
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

export default Main;

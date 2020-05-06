import React from 'react';


class Main extends React.Component {

    render() {

        const scrollClass1 = window.scrollY < 1 ? "main__content" : "hidden";

        return (
            <main className="container__page--main" id="main" role="main">
                <div className="container__general">
                    <div className="container__section--main">

                        <h2 className="main__title text__main--title" >
                            beatriz perez fernandez
                        </h2>
                        <h3 className="main__subtitle text__main--subtitle" >
                            junior frontend developer
                        </h3>


                        <div className={scrollClass1}>
                            <p className="main__text text__base">
                                ¡Hola!
                            </p>
                            <p className="main__text text__base">
                                Este es mi portfolio online.
                                He desarrollado esta pequeña aplicación web para mostrarte mi recorrido y algunos de los proyectos en los que he trabajado por el camino que va de la arquitectura al FrontEnd.
                            </p>
                            <p className="main__text text__base">
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

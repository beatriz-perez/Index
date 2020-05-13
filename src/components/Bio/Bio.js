import React, { Component } from 'react'

// Images:
import Picture from '../../images/cv_picture.jpeg';

// Components:
import Resume from './Resume';
import OnlineCV from './OnlineCV';

export default class Bio extends Component {
    render() {
        return (
            <div className="bio-box">
                <div className="bio">
                    <img src={Picture} alt="CV Picture" className="bio__picture"/>

                    <p className="bio__text bio__text--title text__section--title">Beatriz Pérez Fernández - FrontEnd Developer</p>
                    <p className="bio__text bio__text--title text__bold">Experiencia</p>
                    <p className="bio__text text__regular">
                        Durante los últimos años he trabajado como <span className="text__bold">arquitecto</span> en diferentes proyectos de distintas escalas en España y China, lo que me ha permitido adquirir habilidades para la planificación y desarrollo de proyectos, manejo de tiempos y deadlines, organización de tareas y trabajo en equipo, así como soltura para el trabajo en entornos internacionales y multidisciplinares.
                    </p>
                    <p className="bio__text text__regular">
                        Además, tengo un muy buen nivel de <span className="text__bold">inglés</span>, tanto oral como escrito, y estoy acostumbrada al empleo del idioma en el entorno de trabajo.
                    </p>
                    
                    
                    <p className="bio__text bio__text--title text__bold">Salto a la arquitectura digital</p>
                    <p className="bio__text text__regular">
                        Tras una década dedicada a la edificación y el urbanismo, he descubierto a través de proyectos personales que muchas de mis habilidades desarrolladas como arquitecto son aplicables al <span className="text__bold">desarrollo web</span>, disciplina que me ha ido gustando cada vez más por su flexibilidad y dinamismo hasta el punto de decidir a finales del 2019 convertirlo en mi profesión.
                    </p>
                    <p className="bio__text text__regular">
                        A lo largo de los meses siguientes como estudiante en <span className="text__bold">Adalab</span>, he asentado los conocimientos básicos de esta disciplina y ahora continuo mi formación online y busco un puesto de trabajo en el que seguir desarrollando mis habilidades como FrontEnd Developer.
                    </p>
                    
                    <p className="bio__text bio__text--title text__bold">Otras habilidades</p>
                    <p className="bio__text text__regular">
                        Gracias a mis años de arquitectura, manejo con soltura todas las herramientas de diseño gráfico de Adobe así como AutoCad y Revit.
                    </p>
                    <p className="bio__text text__regular">
                        Amante del diseño en todas sus formas, tengo un master en Diseño de Moda y Alta Costura por la UPV y he realizado dos cursos en Central Saint Martins, como becada por BIAAF y BBK por dos años consecutivos. Así que lo mismo arreglo un roto que un descosido… o programo una web de morirse para la colección otoño-invierno. 
                    </p>
                    <p className="bio__text text__regular">
                        He tenido mi propia empresa, lo que me ha llevado a aprender sobre marketing, publicidad, finanzas… y sobre todo a aprender a aprender continuamente. 
                    </p>
                    <p className="bio__text text__regular">
                        Viajar, los idiomas y zambullirme en culturas diferentes son otra de mis grandes pasiones.
                    </p>
                    <p className="bio__text bio__text--title text__bold">FrontEnd Development</p>
                    <p className="bio__text text__regular">
                        Sigo realizando cursos y proyectos y ampliando mis conocimientos cada día. Algunas de mis competencias adquiridas son: 
                    </p>
                    <p className="bio__text text__regular">
                        HTML <i class="fab fa-html5 skill-icon"></i> , 
                        CSS <i class="fab fa-css3-alt skill-icon"></i> , 
                        SASS <i class="fab fa-sass skill-icon"></i> , 
                        JavaScript <i class="fab fa-js-square skill-icon"></i> , 
                        APIs AJAX, 
                        React <i class="fab fa-react skill-icon"></i> , 
                        Node <i class="fab fa-node skill-icon"></i>
                        <br/>
                        control de versiones con Git <i class="fab fa-git skill-icon"></i> 
                        y GitHub <i class="fab fa-github skill-icon"></i> y técnicas de trabajo colaborativo
                        <br/> 
                        <br/> 
                        marcos de trabajo <span className="text__bold">Agile</span> y <span className="text__bold">Scrum</span>
                        <br/> 
                        <br/> 
                    </p>

                    <p className="bio__text bio__text--title text__regular">
                        Puedes ver más información en mi <span className="text__bold">CV y mi perfil de Linkedin</span> <i className="fas fa-arrow-right"></i>
                    </p>
                    <p className="bio__text text__regular">
                        Y encontrarás algunos de mis <span className="text__bold">proyectos</span> un poco más abajo <i class="fas fa-arrow-down"></i>
                    </p>

                </div>


                <div className="file-box">
                    <Resume/>
                </div>
                <div className="file-box">
                    <OnlineCV/>
                </div>


            </div>
        )
    }
}
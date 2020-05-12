import React, { Component } from 'react'

// Images:
import Picture from '../../images/cv_picture.jpeg';

export default class Bio extends Component {
    render() {
        return (
            <div className="bio-box">
                <div className="bio">
                    <img src={Picture} alt="CV Picture" className="bio__picture"/>

                    <p className="bio__text text__detail">
                        Durante los últimos años he trabajado como arquitecto en diferentes proyectos de distintas escalas en España y China, lo que me ha permitido adquirir habilidades para la planificación y desarrollo de proyectos, manejo de tiempos y deadlines, organización de tareas y trabajo en equipo, así como soltura para el trabajo en entornos internacionales y multidisciplinares. Además, tengo un muy buen nivel de inglés, tanto oral como escrito, y estoy acostumbrada al empleo del idioma en el entorno de trabajo.
                    </p>
                    <p className="bio__text text__detail">
                        Tras una década dedicada a la edificación y el urbanismo, he descubierto a través de proyectos personales que muchas de mis habilidades desarrolladas como arquitecto son aplicables al desarrollo web, disciplina que me ha ido gustando cada vez más por su flexibilidad y dinamismo hasta el punto de decidir a finales del año pasado convertirlo en mi profesión.
                    </p>
                    <p className="bio__text text__detail">
                        A lo largo de estos meses como estudiante en Adalab, he asentado los conocimientos básicos de esta disciplina y ahora busco un puesto de trabajo en el que seguir desarrollando mis habilidades como FrontEnd Developer.
                    </p>
                    <p className="bio__text text__detail">
                        Gracias a mis años de arquitectura, manejo con soltura todas las herramientas de diseño gráfico de Adobe así como AutoCad y Revit. Amante del diseño en todas sus formas, tengo un master en Diseño de Moda y Alta Costura por la UPV y he realizado dos cursos en Central Saint Martins, como becada por BIAAF y BBK por dos años consecutivos. Así que lo mismo arreglo un roto que un descosido… o programo una web de morirse para la colección otoño-invierno. He tenido mi propia empresa, lo que me ha llevado a aprender sobre marketing, publicidad, finanzas… y sobre todo a aprender a aprender continuamente. Viajar, los idiomas y zambullirme en culturas diferentes son otra de mis grandes pasiones.
                    </p>
                </div>

                <div className="file-box">
                </div>

                <div className="file-box">
                </div>

            </div>
        )
    }
}

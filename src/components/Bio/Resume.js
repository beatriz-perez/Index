import React, { Component } from 'react'

// Files:
import PdfEs from '../../files/CV-Beatriz-Perez-FrontEnd.pdf';
import PdfEn from '../../files/Resume-Beatriz-Perez FrontEnd.pdf';
import CVimage from '../../images/CV.jpg';

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="column1">
                    <img src={CVimage} alt="CV_thumbnail" className="cv-image"/>
                    <a 
                        href = {PdfEs}
                        target = "_blank"
                        rel="noopener noreferrer"
                        className="download-button button__base text__regular"
                    > 
                        Descargar CV en PDF, castellano
                    </a>
                    <a 
                        href = {PdfEn}
                        target = "_blank"
                        rel="noopener noreferrer"
                        className="download-button button__base text__regular"
                    > 
                        Download english PDF Resume 
                    </a>
                </div>

                <div className="column2">
                    <p className="cv__text cv__text--title text__bold">Curriculum Vitae - Resume</p>
                    <p className="cv__text text__regular">
                        Este es mi currículum completo en pdf, con mi experiencia profesional, competencias y proyectos realizados.
                    </p>
                    <p className="cv__text text__regular">
                        Contiene links tanto a este portfolio como a mis redes, info de contacto y proyectos.
                    </p>

                    <p className="cv__text text__regular">
                        Puedes visualizarlo y descargarlo o compartirlo en su versión en castellano o en inglés.
                    </p>
                </div>
                
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react'

// Files:
import CVimage from '../../images/LinkedInCV.jpeg';


export default class OnlineCV extends Component {
    render() {

        const OnlineCVUrl = 'https://es.linkedin.com/in/beatriz-pfp';
        return (
            <React.Fragment>

                <div className="column1">
                    
                    <a
                        href={OnlineCVUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={CVimage} alt="CV_thumbnail" className="cv-image"/>
                    </a>
                    <a 
                        href={`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20este%20perfil%20de%20FrontEnd%20en%20LinkedIn%3A%20${OnlineCVUrl}&hashtags=%2C%20FrontEndDeveloper`}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="shareOnTwitter" 
                        className="share-twitter-button button__base text__regular" 
                    >
                        <i className="fab fa-twitter twitterIcon"></i>
                        Compartir CV en Twitter
                    </a>
                    <a 
                        data-action="share/whatsapp/share" 
                        href={`whatsapp://send?text=Echa%20un%20vistazo%20a%20este%20perfil%20de%20FrontEnd%20en%20LinkedIn%3A%20${OnlineCVUrl}`}
                        className="share-whatsapp-button button__base text__regular"
                    >
                        <i className="fab fa-whatsapp whatsappIcon"></i>
                        Compartir CV en WhatsApp
                    </a>

                </div>

                <div className="column2">
                    <p className="cv__text cv__text--title text__bold">CV online</p>
                    <p className="cv__text text__regular">
                        Este es mi currículum online en LinkedIn, también aquí encontrarás información sobre mi experiencia profesional, competencias y proyectos.
                    </p>
                    <p className="cv__text text__regular">
                        Visítalo haciendo click sobre él!
                    </p>
                    <p className="cv__text text__regular">
                        Además, puedes compartirlo en twitter o compartirlo por whatssap si crees que podría resultarle interesante a alguno de tus contactos.
                    </p>
                </div>
                
            </React.Fragment>
        )
    }
}

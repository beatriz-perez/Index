import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        const PortfolioUrl = 'https://beatriz-perez.github.io/Index/';

        return (
            <div className="contact">
                <ul className="contact__blockList">

                    <li className="contact__blockList--block">
                        <p className="contact__blockList--title text__bold">Escríbeme</p>
                        <ul>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="mailto:beatriz.pfp@gmail.com"
                                >
                                    <i className="far fa-envelope contact-icon"></i> mail
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="https://api.whatsapp.com/send?phone=34688713820&text=Hola,%20Beatriz!"
                                    target="_blank"
                                    rel="noopener noreferrer"            
                                >
                                    <i className="fas fa-mobile-alt contact-icon"></i> phone message
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="tel:688713820"
                                >
                                    <i className="fas fa-phone-volume contact-icon"></i> phone call
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="contact__blockList--block">
                        <p className="contact__blockList--title text__bold">Encuéntrame en redes</p>
                        <ul>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="https://es.linkedin.com/in/beatriz-pfp"
                                    target="_blank"
                                    rel="noopener noreferrer"            
                                >
                                    <i className="fab fa-linkedin-in contact-icon"></i> perfil de linkedIn
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="https://twitter.com/beatriz_pfp"
                                    target="_blank"
                                    rel="noopener noreferrer"            
                                >
                                    <i class="fab fa-twitter contact-icon"></i> perfil de twitter                                
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href="https://github.com/beatriz-perez"
                                    target="_blank"
                                    rel="noopener noreferrer"            
                                >
                                    <i class="fab fa-github contact-icon"></i> perfil de github                                
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className="contact__blockList--block">
                        <p className="contact__blockList--title text__bold">Comparte este portfolio</p>
                        <ul>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${PortfolioUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"            
                                >
                                    <i className="fab fa-linkedin-in contact-icon"></i> compartir en linkedin
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    href={`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20este%20portfolio%20de%20una%20FrontEnd%20developer%3A%20${PortfolioUrl}&hashtags=%2C%20FrontEndDeveloper`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fab fa-twitter contact-icon"></i> compartir en twitter
                                </a>
                            </li>

                            <li className="contact__blockList--item text__regular">
                                <a 
                                    data-action="share/whatsapp/share" 
                                    href={`whatsapp://send?text=Echa%20un%20vistazo%20a%20este%20portfolio%20de%20una%20FrontEnd%20developer%3A%20${PortfolioUrl}`}
                                >
                                    <i class="fab fa-whatsapp contact-icon"></i>compartir en whatsapp
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

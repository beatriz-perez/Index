import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer className="container__page--footer" id="footer" role="contentinfo">
                <div className="container__general">
                    <div className="container__section--footer">

                        <p className="footer__text text__footer">
                            code by 
                            <span className="footer__text--link text__footer text__footer--link"> 
                                 beatriz 
                            </span>
                            <i className="icon fas fa-user-astronaut"></i>
                        </p>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

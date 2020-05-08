import React from 'react';
import PropTypes from 'prop-types';

class Aside extends React.Component {

    render() {

        let backgroundStyle = {

        }

        return (
            <aside className="container__page--aside" id={this.props.id} style={backgroundStyle} role="region">
                <div className="container__general">
                    <div className="container__section--aside">

                        <div className="aside__titleBox">
                            <div className="aside__titleBox--colorshape"></div>
                            <h2 className="aside__titleBox--title text__section--title" >
                                {this.props.title}
                            </h2>                        
                            <h3 className="aside__titleBox--description text__section--text" >
                                {this.props.description}
                            </h3>                        
                        </div>
                        
                        {this.props.children}

                    </div>
                </div>
            </aside>
        );
    }
}

Aside.defaultProps = {
    title: 'sección',
    description: 'descripción del contenido de esta sección',
    role: 'site use instructions'
}
Aside.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    role: PropTypes.string
}

export default Aside;

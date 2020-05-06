import React from 'react';
import PropTypes from 'prop-types';

class Aside extends React.Component {

    render() {
        return (
            <aside className="container__page--aside" id={this.props.id} role={this.props.asideRole}>
                <div className="container__general">
                    <div className="container__section--aside">

                        <h2 className="aside__title text__section--title" >{this.props.asideTitle}</h2>
                        {this.props.children}

                    </div>
                </div>
            </aside>
        );
    }
}

Aside.defaultProps = {
    asideTitle: 'sección complementaria',
    asideRole: 'site use instructions'
}
Aside.propTypes = {
    asideTitle: PropTypes.string,
    asideRole: PropTypes.string
}

export default Aside;

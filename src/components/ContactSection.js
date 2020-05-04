import React from 'react';

class ContactSection extends React.Component {

    render() {
        return (
            <section

                className="container__page--contactSection"
                id={this.props.id}
                role="contact information"
            >
                <div className="container__general">
                    <div className="container__section--contactSection">

                        <h2 className="projectPreview__title text__section--title" >{this.props.title}</h2>
                        {this.props.children}
                        
                    </div>
                </div>

            </section>
        );
    }
}

export default ContactSection;

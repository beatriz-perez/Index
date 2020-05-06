import React from 'react';

class ParallaxSection extends React.Component {

    render() {
        return (
            <section
                className="container__page--parallaxSection"
                id={this.props.id}
                role="figure"
                style={{ backgroundImage: `url(${this.props.imgURL})` }}
            >
                <div className="container__general">
                    <div className="container__section--parallaxSection">
                        <h2 className="parallaxSection__title text__parallax--quote" >{this.props.quote}</h2>
                    </div>
                </div>
            </section>

        );
    }
}

export default ParallaxSection;

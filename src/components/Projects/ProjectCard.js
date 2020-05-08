import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {

        const { id, name, type, created:{ year, month }, status, description, imageURL, codeURL, demoURL } = this.props.info;

        const months = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ]
        let monthName = months[month - 1];
        

        return (

            <div className="project__card--rotateArea">
                <div className="project__card">

                    <div className="project__card--front">
                        <p className="project__name--shadow text__section--title">
                            {name}
                        </p>
                        <p className="project__name text__section--title">
                            {name}
                        </p>
                        <p className="project__type text__detail">
                                {type}
                        </p>
                        <p className="project__date text__detail">
                                {`${monthName} de ${year}`}
                        </p>
                        

                        <img src={imageURL} alt={name} className="project__image"/>

                    </div>

                    <div className="project__card--back">
                        <p className="project__description text__detail">
                            {description}
                        </p>
                        <div>
                            <a className="button__base text__detail" href={codeURL} target="_blank">
                                ver repositorio y código
                            </a>
                            <a className="button__base text__detail" href={demoURL} target="_blank">
                                ver la web funcionando
                            </a>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

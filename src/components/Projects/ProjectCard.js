import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {

        const { id, name, type, created, status, description, imageURL, codeURL, demoURL } = this.props.info;

        return (

            <div className="project__card--rotateArea">
                <div className="project__card">

                    <div className="project__card--front">
                        <p className="project__name">
                            {name}
                        </p>
                        <p className="project__type">
                            {type}
                        </p>
                        <img src={imageURL} alt={name} className="card__image" />
                        <div className="card__infobox">
                            <div className="card__infobox--info">
                                <p className="text__card text__card--bold">id</p>
                                <p className="card__infobox--id">{id}</p>
                            </div>
                            <div className="card__infobox--info">
                                <p className="text__card text__card--bold">creado</p>
                                <p className="text__card">{created}</p>
                            </div>
                            <div className="card__infobox--info">
                                <p className="text__card text__card--bold">status</p>
                                <p className="text__card">{status}</p>
                            </div>
                        </div>
                    </div>

                    <div className="project__card--back">
                        <p className="">
                            {description}
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

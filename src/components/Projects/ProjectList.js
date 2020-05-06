import React, { Component } from 'react'


// Components:
import ProjectCard from './ProjectCard';

export default class ProjectList extends Component {
    render() {

        const {ProjectsInfoList} = this.props.info;
        const generateJSX = (item, index) => {
            return (
                <li key={index} className="listElement">
                        <ProjectCard info={item} />
                </li>
            )
        };
        const resultsArray = ProjectsInfoList.map(generateJSX);
        const totalInfoText = `Hay ${ProjectsInfoList.length} proyectos en total.`
        let resultInfoText;
        switch (resultsArray.length) {
            case 0:
                resultInfoText = 
                `Pero ninguno de ellos coincide con tu búsqueda.`
                break;
            case 1:
                resultInfoText = "Uno de ellos coincide con tu búsqueda:"
                break;
            default:
                resultInfoText = `${resultsArray.length} coinciden con tu búsqueda:`
        }

        return (
            <div>
                <p className="resultsInfo text__base">{totalInfoText}</p>
                <p className="resultsInfo text__base">{resultInfoText}</p>
                <ul className="projectList">
                    {resultsArray}
                </ul>
            </div>
        )
    }
}

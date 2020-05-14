import React, { Component } from 'react'


// Components:
import ProjectCard from './ProjectCard';

export default class ProjectList extends Component {
    render() {

        const {projectsInfo: {ProjectsInfoList}, infoFilters:{ order, orderReverse, typeFilter}} = this.props.info;

        const generateJSX = (item, index) => {
            return (
                <li key={index} className="listElement">
                        <ProjectCard info={item} />
                </li>
            )
        };

        const filteredArray = ProjectsInfoList
            .filter(item => typeFilter === "all" || item.type.includes(typeFilter))
            .sort((a, b) => {
                if (a[order] > b[order]) { return 1; }
                if (a[order] < b[order]) { return -1; }
                else { return 0; }
            })
            .map(generateJSX);
        const resultsArray = orderReverse === false ? filteredArray : filteredArray.reverse();



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
                <p className="resultsInfo text__section--text">{totalInfoText}</p>
                <p className="resultsInfo text__section--text">{resultInfoText}</p>
                <ul className="projectList">
                    {resultsArray}
                </ul>
            </div>
        )
    }
}

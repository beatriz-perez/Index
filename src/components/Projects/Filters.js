import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes:
import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
import RadioImput from '../FormComponents/RadioInput';
import CheckboxInput from '../FormComponents/CheckboxInput';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.preventSubmit = this.preventSubmit.bind(this);
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { info:{ textFilter, typeFilter, statusFilter, order, orderReverse} , task } = this.props;

        return (
            <form className="firltersBox" onSubmit={this.preventSubmit}>
                <div className="firltersBox__set firltersBox__set--filter">
                    <p className="legend text__bold">filtrar por:</p>
                    <TextInput
                        name="textFilter" 
                        value={textFilter} 
                        task={task} 
                        labelText="nombre"
                        sampleText="ej: project index"
                    />
                    <SelectInput
                        name="typeFilter" 
                        value={typeFilter} 
                        task={task} 
                        labelText="tipo"
                        option1="todos"
                        value1="all"
                        option2="proyectos personales"
                        value2="personal"
                        option3="proyectos de estudios"
                        value3="Adalab"
                    />
                    <SelectInput
                        name="statusFilter" 
                        value={statusFilter} 
                        task={task} 
                        labelText="estado"
                        option1="todos"
                        value1="all"
                        option2="terminados"
                        value2="finished"
                        option3="en marcha"
                        value3="ongoing"
                    />
                </div>
                <div className="firltersBox__set firltersBox__set--order">
                    <p className="legend text__bold">ordenar por:</p>
                    <RadioImput
                        name="order" 
                        value="name"
                        checkValue={order} 
                        task={task} 
                        labelText="nombre (orden alfabético)"
                    />
                    <RadioImput
                        name="order" 
                        value="id"
                        checkValue={order} 
                        task={task} 
                        labelText="id (orden de entrada)"
                    />
                    <CheckboxInput
                        name="orderReverse"
                        value="reverse"
                        checked={orderReverse}
                        task={task} 
                        labelText="invertir el orden" 
                    />
                </div>

            </form> 
        )
    }
}

Filters.propTypes = {
    info: PropTypes.object.isRequired,
    task: PropTypes.func.isRequired
}

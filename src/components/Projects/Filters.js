import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes:
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
        const { info:{ typeFilter, order, orderReverse} , task } = this.props;

        return (
            <form className="firltersBox" onSubmit={this.preventSubmit}>
                <SelectInput
                    name="typeFilter" 
                    value={typeFilter} 
                    task={task} 
                    labelText="filtrar por tipo: "
                    option1="todos"
                    value1="all"
                    option2="proyectos personales"
                    value2="personal"
                    option3="como estudiante de Adalab"
                    value3="Adalab"
                    option4="pruebas técnicas"
                    value4="prueba"
                />
                <div className="orderBox">
                    <RadioImput
                        name="order" 
                        value="name"
                        checkValue={order} 
                        task={task} 
                        labelText="ordenar por nombre"
                    />
                    <RadioImput
                        name="order" 
                        value="id"
                        checkValue={order} 
                        task={task} 
                        labelText="ordenar por antigüedad"
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

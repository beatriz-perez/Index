import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.id, event.currentTarget.value);
    }

    render() {
        const { name, value, labelText, option1, value1, option2, value2, option3, value3 } = this.props;
        return (
            <div className="inputBox">
                <label htmlFor={name} className="label text__regular">
                    {labelText}
                </label>
                <select id={name} value={value} onChange={this.handleChange}>
                    <option value={value1}>{option1}</option>
                    <option value={value2}>{option2}</option>
                    <option value={value3}>{option3}</option>
                </select>
            </div>
        )
    }
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
}

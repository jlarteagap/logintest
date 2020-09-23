import React, { Fragment } from 'react'
import './Input.css'

const Input = ({attribute, handleChange, params}) => {
    return(
        <Fragment>
            <input 
                id = {attribute.id}
                name = {attribute.name}
                placeholder = {attribute.placeholder}
                type = {attribute.type}
                onChange = { (e) => handleChange(e.target.name, e.target.value)}
                className = {params ? 'login__input input--error' : 'login__input'}
            />
        </Fragment>
    )
}

export default Input;
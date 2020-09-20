import React from 'react'
import './Input.css'

const Input = ({attribute, handleChange, params}) => {
    return(
        <div>
            <input 
                id = {attribute.id}
                name = {attribute.name}
                placeholder = {attribute.placeholder}
                type = {attribute.type}
                onChange = { (e) => handleChange(e.target.name, e.target.value)}
                className = {params ? 'input input--error' : 'input'}
            />
        </div>
    )
}

export default Input;
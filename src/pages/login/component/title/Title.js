import React from 'react';
import './Title.css';

const Title = ({ text }) => {
    return(
        <label className="title--label">{ text }</label>
    )
}

export default Title;
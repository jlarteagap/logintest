import React, { Fragment } from 'react';
import './Title.css';

const Title = ({ text }) => {
    return(
        <Fragment>
            <label className="title--label">{ text }</label>
            <p className="title__description">*Necesita un usuario y una contraseña para ingresar al sitio. <br />
            User: admin <br />
            Pass: 123456
            </p>
        </Fragment>
    )
}

export default Title;
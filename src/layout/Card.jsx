import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = (props) => { 
    return (
        <div className="card__card">
            <Link className="card__link" to={props.link} target="_blank">
                <img src={props.imagem} alt={props.titulo}/>
                <p>{props.titulo}</p>
            </Link>
        </div>
    )
}

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default (props) => 
    <div className="card">
        <Link className="link" to={props.link} target="_blank">
            <img src={props.imagem} alt={props.titulo}/>
            <p>{props.titulo}</p>
        </Link>
    </div>

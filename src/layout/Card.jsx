import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

<<<<<<< HEAD
export default (props) => 
    <div className="card">
        <Link className="link" to={props.link} target="_blank">
            <img src={props.imagem} alt={props.titulo}/>
            <p>{props.titulo}</p>
        </Link>
    </div>
=======
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
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)

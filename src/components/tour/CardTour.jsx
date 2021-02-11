import React, { useState }from 'react';

import './CardTour.css';

function CardTour(props) {

    const [leiaMais, setLeiaMais] = useState(false);

    return (
<<<<<<< HEAD
        <div className="cardTour">
=======
        <div className="tour__card-tour">
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)
            <img src={props.imagem} alt={props.titulo}/>
            <p id="titulo">{props.titulo}</p>
            <p id="preco">{props.preco}</p>
            <p id="descricao">
                {leiaMais?props.descricao:`${props.descricao.substring(0, 200)}...`}
                <button id="leiaMais-btn" onClick={() => setLeiaMais(!leiaMais)}>
                    {leiaMais?"Mostrar Menos": "Leia Mais"}
                </button>
            </p>
            <button id="remove-btn" onClick={() => props.removeTour(props.id)}>Sem Interesse</button>
        </div>
    )
}

export default CardTour;
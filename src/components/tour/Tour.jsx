import React, { useState }from 'react';

import './Tour.css';
import CardTour from './CardTour';
import Tours from './tours.json';

function Tour() {
    
    document.title = "Tours";
    document.body.style.background = "#ffcccb";

    const [tours, setTours] = useState(Tours);

    const removeTour = (id) => {
        const novoTours = tours.filter((tour) => tour.id !== id);
        setTours(novoTours);
    }

    if(tours.length === 0) {
        return (
<<<<<<< HEAD
            <div className="containerTour">
=======
            <div className="tour__container-tour">
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)
                <h1>Página de Tours</h1>
                <p>Não há tours disponíveis</p>
                <hr/>
                <button id="atualizar-btn" onClick={() => setTours(Tours)}>Atualizar</button>
            </div>
        )
    }
    return (
<<<<<<< HEAD
        <div className="containerTour">
=======
        <div className="tour__container-tour">
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)
            <h1>Página de Tours</h1>
            <p>Tours Disponíveis</p>
            <hr/>
            {tours.map((tour) => <CardTour key={tour.id} {...tour} removeTour={removeTour} />)}
        </div> 
    )
}

export default Tour;
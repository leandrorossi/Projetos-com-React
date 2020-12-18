import React from 'react';

import './App.css';

import Card from './layout/Card.jsx';
import imagemContador from './logos/contador.webp';
import imagemTour from './logos/tour.webp';

export default () =>
   <>
        <div className="header">
            <h1>Projetos com React</h1>
        </div>
        <div class="divisor">
            <hr></hr><p>Utilizando Classes</p><hr></hr>
        </div>
        <div className="cards">
            <Card link="/Contador" imagem={imagemContador} titulo="Contador"></Card>
        </div>
        <div class="divisor">
            <hr></hr><p>Utilizando Funcoes</p><hr></hr>
        </div>
        <div className="cards">
            <Card link="/Tour" imagem={imagemTour} titulo="Tours"></Card>
        </div> 
    </>
    
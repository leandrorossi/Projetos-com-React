import React from 'react';

import './App.css';

import Card from './layout/Card.jsx';
import imagemContador from './logos/Contador.webp';
import imagemTour from './logos/Tour.webp';
import imagemRepositorio from './logos/Repositorio.webp';

const App = () => {
  return (
    <>
      <div className="app__header">
        <h1>Projetos com React</h1>
      </div>
      <div class="app__divisor">
        <hr></hr>
          <p>Utilizando Classes</p>
        <hr></hr>
      </div>
      <div className="app__cards">
        <Card link="/Contador" imagem={imagemContador} titulo="Contador" />
      </div>
      <div className="app__divisor">
        <hr></hr>
          <p>Utilizando Hooks</p>
        <hr></hr>
      </div>
      <div className="app__cards">
        <Card link="/Tour" imagem={imagemTour} titulo="Tours" />
        <Card link="/BuscadorRepositorio" imagem={imagemRepositorio} titulo="Buscador de Repositorios" />   
      </div> 
    </>
   )
}  

export default App;
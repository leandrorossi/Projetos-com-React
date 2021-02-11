import React from 'react';

import './App.css';

import Card from './layout/Card.jsx';
<<<<<<< HEAD
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
    
=======
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
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)

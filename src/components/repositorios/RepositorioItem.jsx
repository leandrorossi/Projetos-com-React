import React from 'react';

import './RepositorioItem.css';

function Repositorioitem( props ) {

  const handleClick = () => {
    props.excluirRepositorio(props.id);

    //apaga o aviso ao excluir o repositorio da lista
    if(props.aviso === true) {
      props.setAviso(false);
    }
  }

  return(
    <li className="repositorio__card-list">
      <img src={props.avatar_url} alt={props.name} />
      <div className="repositorio__item-list">
        <strong>{props.name}</strong>
        <p>{props.description}</p>
        <a href={props.html_url} target="_blanck">
          <button onClick={() => props.setAviso(false)}>Acessar</button>
        </a>
        <button type="button" onClick={handleClick}>Excluir</button>
      </div>
    </li>
  )
}

export default Repositorioitem;
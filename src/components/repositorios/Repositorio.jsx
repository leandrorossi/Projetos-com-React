import React, { useState, useEffect } from 'react';
import api from './Api';

import Repositorioitem from './RepositorioItem';
import Aviso from './Aviso';

import './Repositorio.css';
import './SideBar.css';
import './Main.css';

function Repositorio() {

  document.title = "Buscador de Repositorio";
  document.body.style.background = "#e8efec";

  const [repositorios, setRepositorios] = useState(JSON.parse(localStorage.getItem('repositorio')) || []);
  const [input, setInput] = useState("");

  const [aviso, setAviso] = useState(false);
  const [mensagem, setMensagem] = useState();

  //limpa o aviso ao mudar o input
  useEffect(() => setAviso(false), [input]);

  
  const pesquisarRepositorio = async (event) => {

    event.preventDefault();

    try {
      //verifica se o input esta vazio
      if(input === "") {
        setAviso(true);
        setMensagem('Campo em branco');
        return
      }


      const response = await api.get(`/repos/${input.trim()}`);
      let {id, name, description, html_url, owner:{avatar_url}} = response.data;

      //verifica se ja existe algum repositorio na lista
      const repositorioRepetido = repositorios.find(repositorio => repositorio.id === id);

      if(repositorioRepetido) {
        setAviso(true);
        setMensagem('Esse repositório já existe na lista');
        return
      }

      const novoRepositorio = repositorios.concat({
        id,
        name,
        description,
        html_url,
        avatar_url
      });

      setRepositorios(novoRepositorio);
      incluiNoLocalStorage(novoRepositorio);
      setInput("");
    }
    catch {
      setAviso(true);
      setMensagem(`O repositório ${input} não existe`);
    }
  }

  const excluirRepositorio = (id) => {
    const novoRepositorio = repositorios.filter((repositorio) => repositorio.id !== id);

    setRepositorios(novoRepositorio);
    incluiNoLocalStorage(novoRepositorio);
  }

  const incluiNoLocalStorage = (novoArray) => {
    localStorage.setItem('repositorio', JSON.stringify(novoArray));
  }

  return (
    <div className="repositorio__container-repositorio">
      <div className="repositorio__container-aside">
        <aside>
          <strong>Buscador de Repositorios</strong>
          <form>
            <label htmlFor="repositorio">Repositorio: </label>
            <input type="text" name="repositorio" value={input} 
                   onChange={e => setInput(e.target.value)}
            />
            <button type="submit" onClick={pesquisarRepositorio}>Pesquisar</button>
          </form>
        </aside>
        {aviso ? <Aviso mensagem={mensagem}/> : false}
      </div>
      
      <main>
        <ul>
          {repositorios.map( repositorio => 
            <Repositorioitem key={repositorio.id} {...repositorio} 
                             aviso={aviso} setAviso={setAviso} 
                             excluirRepositorio={excluirRepositorio}/> 
          )}
        </ul>
      </main>
    </div>
  )
}

export default Repositorio;
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';
=======
import { BrowserRouter, Switch, Route} from 'react-router-dom';
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)

import App from '../App';
import Contador from '../components/contador/Contador';
import Tour from '../components/tour/Tour';
<<<<<<< HEAD

export default () => 
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Contador" component={Contador} />
            <Route path="/Tour" component={Tour} />
        </Switch>
    </ BrowserRouter>
=======
import Repositorio from '../components/repositorios/Repositorio';

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/Contador" component={Contador} />
                <Route path="/Tour" component={Tour} />
                <Route path="/BuscadorRepositorio" component={Repositorio} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routers;
>>>>>>> 301e217 (Criacao do buscador de repositorio e algumas alteracoes no projeto)

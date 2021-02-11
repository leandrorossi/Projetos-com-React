import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import Contador from '../components/contador/Contador';
import Tour from '../components/tour/Tour';
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
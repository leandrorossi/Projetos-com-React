import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Contador from '../components/contador/Contador';
import Tour from '../components/tour/Tour';

export default () => 
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Contador" component={Contador} />
            <Route path="/Tour" component={Tour} />
        </Switch>
    </ BrowserRouter>

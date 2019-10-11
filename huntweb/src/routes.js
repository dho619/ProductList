import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product/get';
import createProducts from './pages/product/create';

//BrowserRouter define que as routas estao dentro de um browser
//Switch define que apenas uma rota sera chamada por vez e exact e para procura exatamente aquele endereco
const Routes = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/createProducts/" component={createProducts} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;
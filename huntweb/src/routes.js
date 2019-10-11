import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product/get';
import CreateProducts from './pages/product/create';
import UpdateProducts from './pages/product/update';

//BrowserRouter define que as routas estao dentro de um browser
//Switch define que apenas uma rota sera chamada por vez e exact e para procura exatamente aquele endereco
const Routes = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/createProducts/" component={CreateProducts} />
            <Route path="/updateProducts/:id" component={UpdateProducts} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;
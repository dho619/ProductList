import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
import Login2 from './pages/login2';
import Main from './pages/main';
import Product from './pages/product/get';
import CreateProducts from './pages/product/create';
import UpdateProducts from './pages/product/update';
import { isAuthenticated} from './auth';

//Rotas que precisam que vc esteja logado para poder acessar
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => ( 
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )
    )} />
)

//BrowserRouter define que as rotas estao dentro de um browser
//Switch define que apenas uma rota sera chamada por vez e exact e para procura exatamente aquele endereco
const Routes = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/login2" component={Login2} />
            <PrivateRoute path="/products/:id" component={Product} />
            <PrivateRoute path="/createProducts/" component={CreateProducts} />
            <PrivateRoute path="/updateProducts/:id" component={UpdateProducts} />
            
        </Switch>
    </BrowserRouter>
);


export default Routes;
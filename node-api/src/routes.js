const express = require('express');
const routes = express.Router();

//Controllers
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

//Produtos
routes.get('/products', ProductController.index);//mostrar todos
routes.get('/products/:id', ProductController.show);//mostrar especifico
routes.post('/products', ProductController.store); //criar novo
routes.put('/products/:id', ProductController.update); //atualizar informacoes
routes.delete('/products/:id', ProductController.destroy); //apagar registro

//usuarios
routes.get('/users', UserController.index); //mostrar todos usuarios
routes.post('/usersLogin', UserController.loginUser); //logar conta
routes.post('/usersCreate', UserController.createUser); //criar usuario
routes.put('/users/:id', UserController.update); //atualizar informacoes
routes.delete('/users/:id', UserController.destroy); //apagar usuario


routes.use(function(req, res){
    res.status(404).json({ notFound: true, code: 404}) //buscar por paginas que nao existem
});


module.exports = routes;
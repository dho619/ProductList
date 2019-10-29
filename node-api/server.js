const express = require('express'); //para fazer rotas
const cors = require('cors');
const mongoose = require('mongoose'); // para conexao com o mongodb
const requireDir = require('require-dir'); // faz a importacoes de models automaticamente

const app = express();//Iniciando o APP
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);



requireDir('./src/models'); //mostrando o diretorio dos models

//Rotas
app.use('/api', require('./src/routes'));

//porta que vai rodar
app.listen(3001);
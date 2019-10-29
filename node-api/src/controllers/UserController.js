const mongoose = require('mongoose');//conectar com banco
const bcrypt = require('bcrypt'); //criptografia
const jwt = require('jsonwebtoken');//montar token

const User = mongoose.model('User'); //mostrando onde esta o model

jwtSecret = 'codigoSecretoDaCriptografia'; //chave para criar um token
saltRounds = 4; //"tempo" da criptografia

//verifica se realmente e string
function demandString(str){
    if (!str || Object.prototype.toString.call(str) !== '[object String]'){
        return true;
    } else {
        return false;
    }
}

//retornar o erro /*Tem que arrumar, esta entrando em loop infinito*/
function validationError(message){
    const error = new Error(message);
    error.status = 400;
    return error; 
}


module.exports = {//modulos disponiveis externamente

    async index(req, res) { //funcao para mostrar usuarios
        const { } = req.query;//esta em paginate, mas nao e nescessario nesse caso, irei retirar mais para frente
        const user = await User.paginate({}, {page:1, limit: 1000}); //await e para esperar essa linha executar, 
                                                                    //antes de ir pra proxima
        return res.json(user);
    },


    async createUser(req, res) {//criar novo usuario
        const {user, password} = req.body; //desistrurando o objeto body(corpo do json)
        //chamada de funcao declarada mais acima, confere se e string
        if (demandString(user)) return res.json(`Esperado string no user e veio ${user}`);
        if (demandString(password)) return res.json(`Esperado string no password e veio ${password}`);

        //procura no banco pelo o que foi passado de paramentro
        User.findOne({user: user}, function(err,obj) { 
            if (obj){ //se ja existe, retorna erro
                return res.json(validationError('Usuario ja existe'));
            }
        })
     
        req.body.password =  await bcrypt.hash(password, saltRounds); //criptografa a senha em hash
        
        userInfo = await User.create(req.body); //pega as informacoes(login e senha) e guarda no banco
        //userInfo.token = jwt.sign({ user }, jwtSecret); //caso precise de token

        return res.json(userInfo);

    },

    async loginUser (req, res){
        try {
            const {user, password} = req.body;//igual a acima
            demandString(user, 'usuario');
            demandString(password, 'password' );
            var userInfo = {};

            await User.findOne({user: user}, function(err,obj) { 
                if (!obj){ //nesse caso, se nao existe, retorna erro
                    return res.json({"userlogin": false, "message": "Usuario nao existe"});
                }else{
                    userInfo = obj; // se achar, guardas informacoes do usuario
                }
            })
            const hashedPassword = userInfo.password; // pega a senha
            if (!await bcrypt.compare(password, hashedPassword)){ //compara com a senha
                return res.json({"userlogin": false, "message": "Senha invalida"}); // se a senha estiver incorreta
            }   
            const token = jwt.sign(user, jwtSecret); //cria um tokem
            return res.json( {"userlogin": true, "jwt": token}); //exibe que deu certo e mostra o token

        } catch (error) {
            return res.json({"userlogin": false, "message": "Nao foi possivel fazer login"});//caso de algum erro
        }
        
    },

    async update (req, res) { 
        const {user, password} = req.body;
        demandString(user, 'usuario');
        demandString(password, 'password' );

        req.body.password =  await bcrypt.hash(password, saltRounds); //criptografa a nova senha
        const userInfo = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
                                                    //new: true e para retornar o produto ja atualizado para o product
        return res.json(userInfo);
    },
    
    async destroy (req, res) {//apaga o usuario
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }

};
# ProductList
Projeto do Curso da Rocketseat com nodeJS, ReactJS e ReactNative. Contendo a API em nodeJS, o frontend do site em ReactJS e frontend mobile em ReactNative.

Nescessário ter instalado nodeJS, Yarn, docker com o banco mongo instalado, sendo que o banco mongo na api esta com o nome mongodb, caso o seu banco tenha outro nome, será nescessário customizar o node-api.

**Links de instalação de ferramentas utilizadas:**
* Docker Engine - Community : https://docs.docker.com/install/   *** Obrigatório
* nodejs                    : https://nodejs.org/en/download/    *** Obrigatório
* yarn                      : https://yarnpkg.com/en/docs/install#debian-stable *** Obrigatório
* insomnia                  : https://insomnia.rest/download/
* VsCode                    : https://code.visualstudio.com/download

## Como executá-lo:

* 1 - Inicie o docker com o banco: 
        `sudo docker start mongodb`

        Caso nao tenha o banco, use:
        `sudo docker pull mongo` para baixar
        `sudo docker run --name mongodb -p 27017:27017 -d mongo` e depois da o start

        obs: para saber se esta rodando corretamente use `sudo docker ps`

* 2 - Inicie a api-node:
        Dentro da pasta node-api execute:
        Se nescessário execute `sudo npm install` e dps `npm start`
        
        obs: Para testar a API pode usar o insomnia, passando o link base: http://localhost:3001/api


* 3 - Inicie o ReactJS:
        EDentro da pasta huntweb execute:
        Se nescessário execute `sudo yarn install` e dps `yarn start`

        obs: Para testar, acesse http://localhost:3000/ caso dê falta do axios, use `sudo yarn add axios` 

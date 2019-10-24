# ProductList
Projeto dos Cursos da Rocketseat com nodeJS, ReactJS e ReactNative. Contendo a API em nodeJS, o frontend do site em ReactJS e frontend mobile em ReactNative (ainda não desenvolvido).

Nescessário ter instalado até o momento nodeJS, Yarn, docker com o banco mongo instalado, sendo que o banco mongo na api esta com o nome mongodb.

Implementado o backend nodeJS e o frontend em reactJS - além do que foi feito no mini curso, foi adicionado até o momento, o método Delete e Post e update, além de login e registro (Não parte inferior do Login). 

Próximas alterações: "Lembrar de mim"...

**Links de instalação de ferramentas utilizadas:**
* Docker Engine - Community : https://docs.docker.com/install/   *** Obrigatório
* nodejs                    :https://docs.rocketseat.dev/ambiente-react-native/android/linux *** Obrigatório
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
        
        obs: Para testar a API passando o link base: http://localhost:3001/api


* 3 - Inicie o ReactJS:
        EDentro da pasta huntweb execute:
        Se nescessário execute `sudo yarn install` e dps `yarn start`

        obs: Para testar, acesse http://localhost:3000/ caso dê falta do axios, use `sudo yarn add axios` 

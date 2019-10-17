import React from 'react';

import "./styles.css"; //importando o css

// cria um "componente", tipo uma classe, mas nao tem estado
const Footer = () => (
    <footer id="rodape">
        <p>Copyright &copy; 2019 - by Geovane Barbosa <br/>
            <a id="link" href="https://www.facebook.com/geovane.barbosa.10" target="_blank">Facebook</a> |
            <a id="link" href="https://www.linkedin.com/in/geovane-barbosa-3b1337150/" target="_blank">Linkedin</a><br/>
            <a>Email: geovanebarbosacc@hotmail.com</a><br/>
            <a target="_blank">Projeto em nodeJS e ReactJS</a></p>
            <br/>
    </footer>
);

export default Footer;
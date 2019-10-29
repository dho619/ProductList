import React from 'react';

import "./styles.css"; //importando o css
import { isAuthenticated, onSignOut} from '../../services/auth';
import iconLogin from '../../img/IconLogin.png';
import iconLogout from '../../img/IconLogout.png';

//quando abre a pagina, colocar o icone e descricao correto de login ou logout
var icon = isAuthenticated()?iconLogout:iconLogin;
var iconDesc = isAuthenticated()?'Logout':'Login';


/*
    faz a alternancia do login e logout e dependendo do que foi clicado
    ou vai pra pagina de login ou desloga a conta apenas
*/
const loginOrLogout = () => {
    if (isAuthenticated()){
        onSignOut();
        icon = iconLogin;
        iconDesc = 'Logout';
    } else {
        icon = iconLogout;
        iconDesc = 'Login';
        window.location.href= "/login";
    }
}

// cria um "componente", tipo uma classe, mas nao tem estado
const Header = () => (
    <div className='my_header'>
        <header id="main-header">JSHunt</header>
        <div className='login' >  {/*o alt='' em img e por questao de acessibilidade, ele fornece o que e aquela imagem, para deficientes visuais ou navegacao apenas de texto*/}
            <button title={iconDesc} className='IconLogInLogout' onClick= {() => {loginOrLogout();}}><img src={icon} alt="Imagem Login ou Logout"></img>
                <h2>{iconDesc}</h2>
            </button>
        </div>
        
    </div>
);

export default Header;
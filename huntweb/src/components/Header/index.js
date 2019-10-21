import React from 'react';

import "./styles.css"; //importando o css
import { isAuthenticated, onSignOut} from '../../auth';
import iconLogin from '../../img/IconLogin.png';
import iconLogout from '../../img/IconLogout.png';

var icon = isAuthenticated()?iconLogout:iconLogin;
var iconDesc = isAuthenticated()?'Logout':'Login';

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
        <button title='Logout' className='IconLogInLogout' onClick= {() => {loginOrLogout();}}><img src={icon}/>{iconDesc}</button>
    </div>
);

export default Header;
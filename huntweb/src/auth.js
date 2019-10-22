import api from './services/api'; //api criada com node

//verifica se esta autenticado
export const isAuthenticated = () => {
    const token = localStorage.getItem('TOKEN_KEY');
    return (token !== null) ? true : false;
}

//funcao para fazer login
export const onSignIn = async (login, password) => {
  
    const data = {
      "user": login,
      "password": password
    };	
    /*Enviando informacoes de login para o banco */
    const response = await api.post(`/users-login`,data);
    const { userlogin, jwt } = response.data;
    alert(jwt);
    if (userlogin) {	
        localStorage.setItem('TOKEN_KEY', jwt);
        window.location.href= "/";
    }
  }

  export const onSignOut = () => {
     localStorage.removeItem('TOKEN_KEY');
     window.location.href= "/";
  }

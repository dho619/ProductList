const TOKEN_KEY = '@huntWeb-Token'

//verifica se esta autenticado
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//funcao para fazer login
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const onSignOut = () => {
     localStorage.removeItem(TOKEN_KEY);
     window.location.href= "/";
}


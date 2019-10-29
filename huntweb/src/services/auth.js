const TOKEN_KEY = '@huntWeb-Token'; //nome que dei para meu token

//verifica se esta autenticado
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//funcao para fazer login (adicionar token)
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
}

//funcao para deslogar (remover token)
export const onSignOut = () => {
     localStorage.removeItem(TOKEN_KEY);
     window.location.href= "/";
}


import axios from 'axios'; //fazer a conexao com a api

const api = axios.create({
     baseURL: 'http://localhost:3001/api' //caminho da api ou servidor
});

export default api;
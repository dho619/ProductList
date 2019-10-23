import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import './styles.css'; 
import api from '../../services/api'; //api criada com node


export default class PageSignIn extends Component {

  async onRegister (user, password){
    const data = {
      "user": user,
      "password": password
    };	
    /*Enviando informacoes de login para o banco */
    const response = await api.post('/usersCreate',data);
    const { status } = response.data;
    if (status == 400) {	
      alert('Usuário já existe!'); 
    } else {
      alert('Usuario criado, faça o login, para testar!');
      window.location.href= "/login";
      
    }
    
  }
  
  render() {
  return (
    <Container component="main" maxWidth="xs">
      <div className='paper'>
        <h1>Registrar</h1>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="login"
            label="Seu Login"
            name="login"
            autoComplete="login"
            autoFocus
            onKeyDown={this.enterInLogin}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            title='Registrar nova conta'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={() => {this.onRegister(document.getElementById("login").value, document.getElementById("password").value); }}
          >
            Registrar
            </Button>
          
        </form>
      </div>
    </Container>
  )}
}


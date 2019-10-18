import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';
import './styles.css'; 

import api from '../../services/api'; //api criada com node



export default class SignIn extends Component {
  state = { //state e um objeto
    userInfo: {}
  }

  fazerLogin = async (login, password) => {
    const data = {
      "user": login,
      "password": password
    };
    /*Enviando produto para o banco */
    const response = await api.post(`/users-login`,data);

   
    const { userlogin, jwt } = response.data;
    if (userlogin) {
      window.location.href= "/";
    }
  }

  enterInLogin(event) {
    if(event.keyCode === 13){		
			document.getElementById('password').focus();
		}
  }

  enterInPassword(event) {
    if(event.keyCode === 13){		
			this.fazerLogin(document.getElementById("login").value, document.getElementById("password").value);
		}
  }

  enterP

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='paper'>
        <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <h1>Logar</h1>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Seu Login"
            name="login"
            autoComplete="login"
            autoFocus
            //onKeyPress={() => {this.enterInLogin(event);}}
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
            onKeyPress={() => {this.enterInPassword()}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar de mim"
          />
          <Button
            title='Entrar na sua conta'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={() => {this.fazerLogin(document.getElementById("login").value, document.getElementById("password").value); }}
          >
            Fazer Login
            </Button>
          <div className='opcExtras'>
            
              <Link to={`/`} title='Recuperar Senha' className='link'>
                Esqueceu sua senha?
                </Link>
            
            
              <Link to={`/`} title='Cadastrar' className='link'>
                {"Não é cadastrado? Cadastre-se"}
              </Link>
            
          </div>
        </form>
      </div>
    </Container>
  )}
}


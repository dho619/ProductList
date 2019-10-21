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

import { onSignIn } from '../../auth';



export default class PageSignIn extends Component {
  state = { //state e um objeto
    userInfo: {}
  }

  //se der enter dentro de login /*Tem que desativar a atualizacao automatica do TextField*/
  enterInLogin(event) {
    if(event.keyCode === 13){		
			document.getElementById('password').focus();
		}
  }

  //Se der enter em Password
  enterInPassword(event) {
    if(event.keyCode === 13){		
      onSignIn(document.getElementById("login").value, document.getElementById("password").value);
		}
  }

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
            onKeyDown={this.enterInPassword}
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
            onClick={() => {onSignIn(document.getElementById("login").value, document.getElementById("password").value); }}
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


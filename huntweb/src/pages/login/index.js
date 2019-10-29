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
import './styles.css'; //arquivo de css

import { login } from '../../services/auth';
import api from '../../services/api';



export default class PageSignIn extends Component {
  state = {
    user: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { user, password } = this.state; //vala que eles sao states
    if (!user || !password) {//Caso estejam vazio
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/usersLogin", { user, password }); //envia requisicao com login e senha e espera o retorno do token
        if (response.data.jwt) { // se ele existe
          login(response.data.jwt);//passa o token para logar
          window.location.href= "/"; //redireciona pra pagina inicial
        } else {
          this.setState({ //caso login senhas sejam invalidos
            error:
              "Houve um problema com o login, verifique suas credenciais. T.T"
          });
        }
        
      } catch (err) {
        this.setState({//caso de erro no codigo
          error:
            "Houve um problema com o login. T.T"
        });
      }
    }
  };

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='paper'>
        <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <h1>Logar</h1>
        {this.state.error && <p>{this.state.error}</p>}{/*Mostra essa linha, apenas se houver erro*/}
        <form className='form' onSubmit={this.handleSignIn} noValidate>
                            {/*onSubmit, toda vez que atualiza, roda essa funcao (para rodar ao dar enter)*/}
          <TextField        
            variant="outlined"
            margin="normal"
            fullWidth
            id="login"
            label="Seu Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={e => this.setState({ user: e.target.value })}//guarda o login no estado
            
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
            onChange={e => this.setState({ password: e.target.value })}//guarda o password no estado
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}//ainda nao funciona
            label="Lembrar de mim"
          />
          <Button
            title='Entrar na sua conta'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            >
            Fazer Login
            </Button>
          <div className='opcExtras'>
              {/*Ambos vai para o registrar novo usuario */}
              <Link to={`/register`} title='Recuperar Senha' className='link'> 
                Esqueceu sua senha?
                </Link>
            
            
              <Link to={`/register`} title='Cadastrar' className='link'>
                {"Não é cadastrado? Cadastre-se"}
              </Link>
            
          </div>
        </form>
      </div>
    </Container>
  )}
}


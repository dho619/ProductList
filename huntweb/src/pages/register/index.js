import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import './styles.css'; 
import api from '../../services/api'; //api criada com node


export default class PageSignIn extends Component {
  state = {//states da classe
    "user": "",
    "password": "",
    "error": ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { user, password } = this.state; //diz que eles sao states da classe, para nao precisar falar toda hora
    if (!user || !password) {//Caso estejam vazip
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const response = await api.post("/usersCreate", { user, password }); //faz uma requisicao mandados os dados pra criar
        if (response.data.status === 400) { //caso de erro 400, pq o usuario ja esta cadastrado
          this.setState({
            error:
              "Usuario já cadastrado!. T.T"
          });
        } else { //se nao deu erro, entao cadastrou
            alert('Usuario criado, faça o login para testar!');
            window.location.href= "/login";
        }
        
      } catch (err) {
        this.setState({ //caso de erro no codigo
          error:
            "Houve um problema ao fazer o cadastro. T.T"
        });
      }
    }
  };
  
  render() {
  return (
    <Container component="main" maxWidth="xs">
      <div className='paper'>
        <h1>Registrar</h1>
        {this.state.error && <p>{this.state.error}</p>}{/*Aparece se error for preenchido */}
        <form className='form' onSubmit={this.handleSignUp} noValidate>{/* onSubmit executar toda vez q der submit */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="login"
            label="Seu Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={e => this.setState({ user: e.target.value })} //passando dados para state user 
            
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
            onChange={e => this.setState({ password: e.target.value })} //passando dados para state password
          />
          
          <Button
            title='Registrar nova conta'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
          >
            Registrar
            </Button>
          
        </form>
      </div>
    </Container>
  )}
}


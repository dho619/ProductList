import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import './styles.css'; 
import api from '../../services/api'; //api criada com node


export default class PageSignIn extends Component {
  state = {
    "user": "",
    "password": "",
    "error": ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { user, password } = this.state;
    if (!user || !password) {//Caso estejam vazip
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const response = await api.post("/usersCreate", { user, password });
        if (response.data.status === 400) {
          this.setState({
            error:
              "Usuario já cadastrado!. T.T"
          });
        } else {
            alert('Usuario criado, faça o login, para testar!');
            window.location.href= "/login";
        }
        
      } catch (err) {
        this.setState({
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
        {this.state.error && <p>{this.state.error}</p>}
        <form className='form' onSubmit={this.handleSignUp} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="login"
            label="Seu Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={e => this.setState({ user: e.target.value })}
            
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
            onChange={e => this.setState({ password: e.target.value })}
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


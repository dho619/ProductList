import React, { Component} from 'react';
import api from '../../../services/api';

import './styles.css';

//const carregar = require('../../main/index');


export default class Product extends Component {
    state = {//states da classe
        product: {},
    };

    async componentDidMount() {//executa assim que a pagina e redenrizada
        const { id } = this.props.match.params;//parametro da url
        
        const response = await api.get(`/products/${id}`);
    
        this.setState({ product: response.data }); //os dados da linha de cima sendo mandado pro state
    }

    prevPage = () => {
       window.history.back(); //volta para a pagina anterior
    }
    
    render(){
        const { product } = this.state; //diz que ele e o state

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p> {/*usado rel="..." por questoes de seguranca, ler mais aqui: https://mathiasbynens.github.io/rel-noopener/#hax */}
                    URL: <a target="_blank" rel="noopener noreferrer" href={'/'}>{product.url}</a>
                </p>
                <button onClick={this.prevPage}>Voltar</button>
            </div>
        );
    }
}
import React, { Component} from 'react';
import api from '../../services/api';

import './styles.css';

const carregar = require('../main/index');


export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {//executa assim que a pagina e redenrizada
        const { id } = this.props.match.params;//parametro da url
        
        const response = await api.get(`/products/${id}`);
    
        this.setState({ product: response.data }); //os dados da linha de cima sendo mandado pro state
    }

    prevPage = () => {
       window.history.back(); 
    }
    
    render(){
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p> 
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                <button onClick={this.prevPage}>Voltar</button>
            </div>
        );
    }
}
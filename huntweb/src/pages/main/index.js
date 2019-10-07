import React, { Component } from 'react';
import api from '../../services/api'; //api criada com node

export default class Main extends Component {
    // usa-se o state para poder acessar essas variaveis externamente
    state = { //state e um objeto
        products: [],
    }

//componentDidMount executa assim que e criado a pagina
    componentDidMount() { //nao clk o "() => ", pq e uma funcao da proprio js
        this.loadProducts();
    }
 
    loadProducts = async () => {
        const response = await api.get('/products');
        //setState e para alterar o objeto state
        this.setState({ products: response.data.docs }); //response.data.docs, ta pegando os produtos na api
    };

    //render sempre executa novamente, se alguma variavel do state for alterada
    render() {
        //a key no h2 e passada, pq o react pede que tenha uma key unica pra cada item da iteracao
        return  (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }
}

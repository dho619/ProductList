import React, { Component} from 'react';
import api from '../../../services/api';

import './styles.css';



export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {//executa assim que a pagina e redenrizada
        
    }

    prevPage = () => {
       window.history.back(); 
    }

    CreateProd = async () => {
        /*Pegando os valores dos campos*/
        const name = document.getElementById("nameProduct").value;
        const description = document.getElementById("descProduct").value;
        const url = document.getElementById("urlProduct").value;

        //tratamento de campos vazio
        if (name===''){
            alert('Nescessario digitar um nome para o produto');
            return;
        }
        if (description===''){
            alert('Nescessario digitar uma descrição para o produto');
            return;
        }
        if (url===''){
            alert('Nescessario digitar uma URL para o produto');
            return;
        }


        const data = { //cria um objeto em formato json
            'title': name,
            'description': description,
            'url': url
        }


        /*Enviando produto para o banco */
        await api.post(`/products/`, data);

        /*Limpando os campos*/
        document.getElementById("nameProduct").value = '';
        document.getElementById("descProduct").value = '';
        document.getElementById("urlProduct").value = '';

        alert('Produto Cadastrado com Sucesso!');
    }

    render(){
        return (
            <div className="product-info">
                <h1>New Product:</h1>
                <div className="tableFields">
                    <pre>Name:          <input id='nameProduct' size='30' placeholder='Digite o nome do produto!' maxlength='30' type="string"></input></pre>
                    <pre>Description:</pre>
                    <pre>               <textarea id='descProduct' cols="26" maxlength='300' placeholder='Digite a descrição do produto!'rows="5"></textarea></pre>
                    <pre>URL:           <input id='urlProduct' size='30' placeholder='exemplo.com.br'maxlength='30' type="url"></input></pre>
                </div>
                <div className="myButton">
                    <button title="Cancelar Cadastro" onClick={this.prevPage}>Cancel</button>
                    <button title="Adicionar Produto" onClick = {() => {this.CreateProd();}}>Add</button>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import api from '../../services/api'; //api criada com node
import { Link } from 'react-router-dom';

import iconDel from '../../img/IconDel.png';
import iconEdt from '../../img/IconEdt.png';
import iconNew from '../../img/IconNew.png';

import './styles.css';
import { isAuthenticated} from '../../auth';

export default class Main extends Component {
    // usa-se o state para poder acessar essas variaveis externamente
    state = { //state e um objeto
        products: [], //title, descricao e demais do produto
        productInfo: {}, // quantida de pagina, pagina atual e outros
        page: 1, // pagina atual
    }

//componentDidMount executa assim que e criado a pagina
    componentDidMount() { //nao clk o "() => ", pq e uma funcao da proprio js
        this.loadProducts();
    }
 
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);//usou ` ` para poder colocar  codigo javascript no meio

        //aqui esta pegando o docs e o resto vai para productInfo 
        const { docs, ...productInfo} = response.data; //response.data, ta pegando os produtos e informacoes na api

        //setState e para alterar o objeto state
        this.setState({ products: docs, productInfo, page }); 
    };   //isso "productInfo" e o mesmo que "productInfo: productInfo"

    prevPage = () => {
        const { page, productInfo} = this.state;
        
        //se esta na primeira pagina, ja retorna sem fazer nada
        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);

    }

    nextPage = () => {
        const { page, productInfo} = this.state;
        
        //se esta na ultima pagina, ja retorna sem fazer nada
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);//chamando a funcao de mostrar a pagina

    }

    DeleteProduct = async (id, page = 1) => {
        if (isAuthenticated())  {
            const response = await api.delete(`/products/${id}`);
            this.loadProducts(page);
        }else {
            alert('Para poder deletar, entre em sua conta!');
        };
    }

    //render sempre executa novamente, se alguma variavel do state for alterada
    render() {
        const { products, page, productInfo} = this.state; //desistruturando
        //aonde era this.state.products.map, fica agr apenas products.map, vale o mesmo para os demais

        //a key no h2 e passada, pq o react pede que tenha uma key unica pra cada item da iteracao
        return  (
            <div className="product-list"> 
                <div className='header'>
                    <h1>Sua Lista de Produtos:</h1>
                    <Link to={`/createProducts`} title='Novo Produto' className='btIcon'><img src={iconNew}/></Link>    
                </div>
                {//aqui codigo javascript, apos "=> (" volta a ser html
                products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                        <div className='buttons'>
                            <Link to={`/updateProducts/${product._id}`} title='Editar' className='btIcon'><img src={iconEdt}/></Link>
                            <button title='Deletar' className='btIcon' onClick= {() => {this.DeleteProduct(product._id, page);}}><img src={iconDel}/></button>
                        </div>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div> 
            </div>

            
        )
    }
}

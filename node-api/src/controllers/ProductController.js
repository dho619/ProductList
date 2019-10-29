const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },/*Puxando todos produtos... Paginate e para mandar em paginas, nesse caso 10 por pagina, precisa passar
        a pagina que sera enviada, na hora da requisicao*/


    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },//Um produto apenas, de acordo com o id

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
                               //atualizar um produto
    async update (req, res) { //new: true e para retornar o produto ja atualizado para o product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },
    
    async destroy (req, res) {//apagar o produto
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

};
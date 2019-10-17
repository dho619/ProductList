const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const { } = req.query;
        const user = await User.paginate({}, {page:1, limit: 1000});
        return res.json(user);
    },

    async store(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    },

    async update (req, res) { //new: true e para retornar o produto ja atualizado para o product
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(user);
    },
    
    async destroy (req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }

};
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//Campos nescessarios para o usuario, o id ele gera automaticamente
const UserSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
       
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: { //data que foi criado
        type: Date,
        default: Date.now,
    },
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);
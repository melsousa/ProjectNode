//requisitando o BD
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');
//transformando o BD em um objeto, e criando os campos do schema,tabela

const ProductSchema = new mongoose.Schema({
    //a seguir estão os campos do meu Schema(tabela) produto
    title: {
        type: String,
        required: true, //dizendo que é obrigatório

    },
    description: {
        type: String,
        required: true,
    },
    url:{
        type:String,
        required: true,
    },
    createdAt:{
        type: Date, //guarda uma data
        default: Date.now, //guarda a data atual
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema); //persistindo os dados na tabela
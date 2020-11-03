const mongoose = require("mongoose");

//importando o model
const Product = mongoose.model("Product");

module.exports = {
    async index(req, res){
        //buscando registros do banco de dados

        //esse parametro vai permitir a mudança de pagina pela url (?page=2), por meio do get
        //definido igual = 1 por padrão caso não encontre os outros valores
        const { page = 1} = req.query;

        const products = await Product.paginate({}, {page, limit: 10});//na primeria chave seria as condições 
                                                                        // (where id = alguma coisa), page:1, pagina atual é 1
                                                                        //limit de pagina = 10 

        // const products = await Product.find();, para poucos registros

        return res.json(products); //.json uma estrutura de dados
                        //que é facíl de ler e alterar dados
    },

    //rota de detalhe
    async show(req,res){
        //procurando por id
        const product = await Product.findById(req.params.id); //recuperado o id req.params.id
        return res.json(product);
    },

    async store(req,res){// o req contem todos os dados da requisição
        //criação
        const product = await Product.create(req.body); //pegando o body la do insomnia do post

        return res.json(product);
    },

    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}); //buscando por id e atualizando por req.body
        return res.json(product);                                                //o new true serve para dizer que é para retornar o produto atualizado

    },
    async destroy(req,res){
         await Product.findByIdAndRemove(req.params.id);
         return res.send();
    }
};
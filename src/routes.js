const express = require("express");
const routes = express.Router();

//importando a classe controle
const ProductController = require("./controllers/ProductController");

// rota, do tp get(buscando, pra mostrar)
routes.get("/products", ProductController.index);//chamando a classe e o metodo index

//rota procurando por id
routes.get("/products/:id", ProductController.show);

//sempre que for uma rota para criar alguma coisa é o post(criando)
routes.post("/products", ProductController.store);

//update
routes.put("/products/:id", ProductController.update);

//delete
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;

//o parametro req simboliza a requisição que a gente ta fazendo no servidor
//, ele vai conter todas as informações, como parametros, copos, usuário
//que ta fazendo a requisição, se ta autenticado ou não, IP 

//rotas
// routes.get('/products', (req,res) =>{

    //inserindo manualmente
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native',
    //     url: 'https://www.mathway.com/Calculus'
    // });

    // return res.send("Hello world !");//resposta pra o usuário
    //O RES é a reposta para o usuário
// });

// module.exports = routes;


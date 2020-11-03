const express = require('express'); //chamando a depedência express
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Inciando o APP
const app = express();

//permitir que envie os dados em formato de json
app.use(express.json());

app.use(cors());//permite que qualquer dominio acesse a api
//Iniciando o banco de dados e conectando
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true,
      useNewUrlParser:true }
  );

  //requisitando com require dir
  requireDir("./src/models");
  
 //requisitando a tabela modelo, sem o require dir
 //require('./src/models/Product');


 //vai receber todas as requisições, post,get,...
app.use('/api', require('./src/routes'));



app.listen(3001); //dizendo qual é a porta localhost:3001, ESSA É A PORTA PRA ACESSAR
                    //executar arquivo no cmd $node server.js
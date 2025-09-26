const express = require('express')
const lojaRoutes= require ('./routes/LojaRoutes')



/* crio tres passos importante,passo o express pro app e informo que o express vai ser usado como funcao

digo pra ele que os dados trabalhados serao o json
e falo pra ele buscar informacoes estaticas pra pagina no arquivo public*/
app=express();
app.use(express.json())
app.use(express.static('public'))





//essa parte fala que quando alguem usar /suplementos
//vai ser executada algo em relacao ao produtoroutes
app.use("/loja",lojaRoutes)

module.exports=app
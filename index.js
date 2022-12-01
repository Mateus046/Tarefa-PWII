const express = require('express');
const routesCategoria = require('./route/routesCategorias');


const app = express();

app.use(express.json());

console.log('teste de github')

app.use('/', routesCategoria);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});
const express = require ('express');
const conta = express()

conta.post('/cadastroConta', (req, res) => {
    res.send('Rota para cadastro de conta');
});

conta.get('/listarConta', (req, res) => {
    res.send('Rota para  listar conta');
});

conta.put('/alterarConta', (req, res) => {
    res.send('Rota para  alterar conta');
});

conta.delete('/excluirConta', (req, res) => {
    res.send('Rota para excluir conta');
});


const app = express();
app.listen(3000,()=>{
    console.log('server online!');

});

app.get('/', function (req,res){
    res.send('Teste de aplicação!!!')
});
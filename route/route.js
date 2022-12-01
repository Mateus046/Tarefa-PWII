
console.log('test of github');

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



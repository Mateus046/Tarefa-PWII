/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');
const modelCliente = require('../model/modelCliente');

const modelCategoria = require('../model/modelCliente');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/
//ROTA DE CADASTRO DE CATEGORIA
//NOME(P1, P2, P3, P4){}
router.post('/cadastrarCliente', (req, res)=>{
    console.log(req.body);
    // let nome_categoria = req.body.nome_categoria;
    let {nome_Cliente, endereco_Cliente, email_Cliente} = req.body;
    modelCategoria.create(
        //DADOS DA INSERÇÂO
        {nome_Cliente, endereco_Cliente, email_Cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO INSERIR .",
                errorObject:error
            });
        }
    );



});


router.get('/listarCliente', (req, res)=>{

    modelCliente.findAll()
        .then(
            (response)=>{
                
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTES LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OS CLIENTES.",
                    errorObject:error
                });
            }
        );

});




router.put('/alterarCliente', (req, res)=>{


    const {cod_Cliente, nome_Cliente} = req.body;

    modelCategoria.update(
        {nome_Cliente},
        {where:{cod_Cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO FAZER A ALTERAÇÃO.",
                errorObject:error
            });
        }
    );
    
});

router.delete('/excluirCliente/:cod_Cliente', (req, res)=>{
    console.log(req.params);
    let {cod_Cliente} = req.params

    modelCategoria.destroy(
        {where:{cod_Cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    );
});

module.exports = router;



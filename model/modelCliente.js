//IMPORTAÇÃO DO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modelCliente = connection.define(
    'tbl_Cliente',
    {
        cod_Cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_Cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        endereco_Cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        email_Cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//modelCliente.sync({force:true});

module.exports = modelCliente;
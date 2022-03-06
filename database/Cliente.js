const Sequelize = require("sequelize");
const connection = require("./database");

const Cliente = connection.define('cliente',{
    nome:{type:Sequelize.STRING,allowNull:false},
    apelido:{type:Sequelize.STRING,allowNull:false},
    email:{type:Sequelize.STRING,allowNull:false},
    senha:{type:Sequelize.STRING,allowNull:false},
    telefone:{type:Sequelize.STRING,allowNull:false},
    endereco:{type:Sequelize.STRING,allowNull:false},
    bairro:{type:Sequelize.STRING,allowNull:false},
    cidade:{type:Sequelize.STRING,allowNull:false},
    estado:{type:Sequelize.STRING,allowNull:false}
});

Cliente.sync({force: false}).then(()=>{console.log("Usuario inserido com sucesso")})
.catch((erro)=>{console.log("Erro ao Inserir usuário")});

module.exports=Cliente;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");//Call const connection from database.js for the conneciton with the database
const cliente = require("./database/Cliente");
const func = ()=>{console.log("Servidor on line")};//function to test the connection
const port = 8080;

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Tests the Connection
connection.authenticate().then(()=>{console.log("Conexão com o banco de dados realizada")})
.catch((erro)=>{console.log("Erro na conexão com o banco de dados")});

//routes

app.get("/",function(require,response){
    response.render("index");
});

app.get("/quemsomos",function(require,response){
    response.render("quemsomos");
});

app.get("/cadastro",function(require,response){
    response.render("cadastro");
});

app.post("/cadastrar",(req,resp)=>{
    var nome = req.body.nome;
    var apelido = req.body.apelido;
    var email = req.body.email;
    var senha = req.body.senha;
    var telefone = req.body.telefone;
    var endereco = req.body.endereco;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var estado = req.body.estado;
    cliente.create({
        nome: nome,
        apelido: apelido,
        email: email,
        senha: senha,
        telefone: telefone,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado,estado
    }).then(()=>{
        resp.redirect("/");
    });

});

app.get("/contato",function(require,response){
    response.render("contato");
});


app.listen(port,func);
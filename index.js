const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const func = ()=>{console.log("Conexão com o Servidor OK")};

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,resp)=>{
    resp.render("index");
});

app.get("/cadastro",(req,resp)=>{
    resp.render("cadastro/cadastro.ejs");
});

app.listen(port,func);

const Sequelize = require("sequelize");
const connection = new Sequelize("novo","root","Higor120783",{
    host : "localhost",
    dialect: "mysql"
});

module.exports = connection;
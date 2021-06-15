var Sequelize=require("sequelize");
var db=new Sequelize("kuliah","root","wahyu355A" ,{
    dialect:"mysql",
    host:"localhost"
});

module.exports = db;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Quizzes = db.define("Quizzes", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
lista_de_perguntas: {
  type: DataTypes.STRING,
  autoIncrement: false
},
placar: {
  type: DataTypes.INTEGER,
  autoIncrement: false
},
Usuario_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Usuario,
    key: 'id'
  }
},

});
Quizzes.belongsTo(Usuario);
Usuario.hasMany(Quizzes,{as: "Quizzes"});
module.exports = Quizzes;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Administrador = db.define("Administrador", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
email: {
  type: DataTypes.STRING,
  autoIncrement: false
},
senha: {
  type: DataTypes.STRING,
  autoIncrement: false
},
telefone: DataTypes.STRING
});
module.exports = Administrador;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Administrador = db.define("Administrador", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
email: DataTypes.STRING,
senha: DataTypes.STRING,
telefone: DataTypes.STRING
});
module.exports = Administrador;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuarios = db.define("Usuarios", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
emailusu: {
  type: DataTypes.STRING,
  autoIncrement: false
},
senhausu: {
  type: DataTypes.STRING,
  autoIncrement: false
},
telefoneusu: DataTypes.STRING
});
module.exports = Usuarios;
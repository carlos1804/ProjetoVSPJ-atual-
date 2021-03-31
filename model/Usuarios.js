const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuarios = db.define("Usuarios", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
emailusu: DataTypes.STRING,
senhausu: DataTypes.STRING,
telefoneusu: DataTypes.STRING,
admin:DataTypes.BOOLEAN
});
module.exports = Usuarios;
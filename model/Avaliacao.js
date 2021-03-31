const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")

const Avaliacao = db.define("Avaliacao", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
texto_avaliacao: {
  type: DataTypes.STRING,
  autoIncrement: false
}
}
);
Avaliacao.belongsTo(Usuario);
Usuario.hasMany(Avaliacao,{as: "Avaliacao"});
 
module.exports = Avaliacao;
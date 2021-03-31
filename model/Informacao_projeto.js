const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Informacao_projeto = db.define("Informacao_projeto", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
texto: DataTypes.STRING,

Usuario_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Usuario,
    key: 'id'
  }
}
});
Informacao_projeto.belongsTo(Usuario);
Usuario.hasMany(Informacao_projeto,{as: "Informacao_projeto"});

module.exports = Informacao_projeto;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Administrador = require("./Administrador")
const Animacao = db.define("Animacao", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
titulo_animacao: DataTypes.STRING,
arquivo_animacao: DataTypes.STRING,
Usuario_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Usuario,
    key: 'id'
  }
},

Administrador_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Administrador,
    key: 'id'
  }
}
});
Animacao.belongsTo(Usuario);
Usuario.hasMany(Animacao,{as: "Animacao"});

Animacao.belongsTo(Administrador);
Administrador.hasMany(Animacao,{as: "Animacao"});

module.exports = Animacao;
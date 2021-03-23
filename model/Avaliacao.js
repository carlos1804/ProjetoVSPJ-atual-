const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Administrador = require("./Administrador")
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
},
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
Avaliacao.belongsTo(Usuario);
Usuario.hasMany(Avaliacao,{as: "Avaliacao"});

Avaliacao.belongsTo(Administrador);
Administrador.hasMany(Avaliacao,{as: "Avaliacao"}); 
module.exports = Avaliacao;
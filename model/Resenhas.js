const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Administrador = require("./Administrador")
const Resenha = db.define("Resenha", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
textoresenha: {
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
Resenha.belongsTo(Usuario);
Usuario.hasMany(Resenha,{as: "Resenhas"});

Resenha.belongsTo(Administrador);
Administrador.hasMany(Resenha ,{as: "Resenhas"});

module.exports = Resenha;
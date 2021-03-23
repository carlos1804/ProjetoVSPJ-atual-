const {Sequelize, DataTypes} = require("sequelize");
const Usuarios = require("./Usuarios")
const Administrador = require("./Administrador")
const db = require("../db");
const HQ = db.define("HQ", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 

isbn: DataTypes.STRING,
arquivo: DataTypes.STRING,
titulo: DataTypes.STRING,

Usuario_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Usuarios,
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
HQ.belongsTo(Usuarios);
Usuarios.hasMany(HQ,{as: "HQ"});

HQ.belongsTo(Administrador);
Administrador.hasMany(HQ, {as: "HQ"});

module.exports = HQ;
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Usuario = require("./Usuarios")
const Administrador = require("./Administrador")
const Quizzes = require("./Quizzes")
const Perguntas = db.define("Perguntas", 
{
id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
}, 
  enunciado: {
  type: DataTypes.STRING,
  autoIncrement: false
  
}, 
 alternativa1: {
  type: DataTypes.STRING,
  autoIncrement: false
  
}, 
alternativa2: {
  type: DataTypes.STRING,
  autoIncrement: false
  
}, 
alternativa3: {
  type: DataTypes.STRING,
  autoIncrement: false
  
},

resposta: {
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
},
Quizzes_Id:{
  type: DataTypes.INTEGER,
  references:{
    model: Quizzes,
    key: 'id'
  }
}
});

Perguntas.belongsTo(Usuario);
Usuario.hasMany(Perguntas,{as: "Perguntas"});

Perguntas.belongsTo(Administrador);
Administrador.hasMany(Perguntas, {as: "Perguntas"});

Perguntas.belongsTo(Quizzes);
Quizzes.hasMany(Perguntas,{as: "Perguntas"});

module.exports = Perguntas;
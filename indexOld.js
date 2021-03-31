require('dotenv').config()
const { Op, Model } = require('sequelize');
let db = require("./db");
const HQ = require("./model/HQ");
const Animacao = require("./model/Animacao");
const Informacao_projeto = require("./model/Informacao_projeto");
const Usuarios = require("./model/Usuarios");
const Perguntas = require("./model/Perguntas");
const Resenhas = require("./model/Resenhas");
const Avaliacao = require("./model/Avaliacao");
const Quizzes = require("./model/Quizzes");

async function sincronizar(){
 await db.sync({force:true});
}

async function inserirAvaliação(){
await Avaliacao.create({texto_avaliacao: "Bom"});
}
inserirAvaliação();
async function consultarAvaliação(){
  const ava = await Avaliacao.findAll();
  console.log(ava);
}

async function inserirQuizz(){
await Quizzes.create({DUVIDA});
}
async function consultarQuizzes(){
  const quiz = await Quizzes.findAll();
  console.log(quiz);
}

async function inseriresenha(){
await Resenhas.create({textoresenha: "Resenha da HQ Tim tin na Africa: ...."});
}
async function consultarresenhas(){
  const r = await Resenhas.findAll();
  console.log(r);
}
async function inseriraperguntas(){
await Perguntas.create({enunciado:"quem sofreu racismo na história ?", alternativa1: "Hellen", alternativa2: "Ana", alternativa3: "Pedro", resposta: "alternativa_1"});
}
async function consultarperguntas(){
  const p = await Perguntas.findAll();
  console.log(p);
}

async function inseriradm(){
await Administrador.create({email:"admo@gmail.com", senha: "mhasenha", telefone: "99990999"});
}
async function consultaradm(){
  const u = await Administrador.findAll();
  console.log(u);
}

async function inserirusu(){
await Usuarios.create({emailusu:"aab@gmail.com", senhausu: "mminhasenha", telefoneusu: "99999"});
}
async function consultarusu(){
  const uu = await Usuarios.findAll();
  console.log(uu);
}

async function inseririnformacaoprojeto(){
await Informacao_projeto.create({texto:"informaçõesssss"});
}
async function consultarinformacao_projeto(){
  const res = await Informacao_projeto.findAll();
  console.log(res);
}

async function inseriranimacao(){
await Animacao.create({titulo_animacao:"Dandara", arquivo_animacao: "em andamento"});
}
async function consultaranimacao(){
  const ani = await Animacao.findAll();
  console.log(ani);
}

async function inserirHQ(){
 await HQ.create({titulo:"Tornar-se negra", isbn: 123333, arquivo: "http://editora.ifpb.edu.br/index.php/ifpb/catalog/book/240"});
}
async function consultarHQ(){
  const hq = await HQ.findAll();
  console.log(hq);
}


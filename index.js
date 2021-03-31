require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const db = require("./db");
const HQ = require("./model/HQ");
const Animacao = require("./model/Animacao");
const Informacao_projeto = require("./model/Informacao_projeto");
const Usuarios = require("./model/Usuarios");
const Perguntas = require("./model/Perguntas");
const Resenhas = require("./model/Resenhas");
const Avaliacao = require("./model/Avaliacao");
const Quizzes = require("./model/Quizzes");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const authorization = require("./Authorization")

async function sync() {
  await Usuarios.sync({force:true});
}
sync();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: 'A Aplicação está ativa!!' })
});

/*
app.get("/hq", async (req, res) => {
  let livros = await HQ.findAll(); 
  res.json(livros);
});
app.get("/hq/:id", async (req, res) => {
  let hq = await HQ.findByPk(req.params.id); 
  res.json(hq);
});

app.get("/animacao", async (req, res) => {
  let ani = await Animacao.findAll(); 
  res.json(ani);
});
app.get("/animacao/:id", async (req, res) => {
  let anim = await Animacao.findByPk(req.params.id); 
  res.json(anim);
});

app.get("/usuario", async (req, res) => {
  let usu = await Usuarios.findAll(); 
  res.json(usu);
});
app.get("/usuario/:id", async (req, res) => {
  let usu = await Usuarios.findByPk(req.params.id); 
  res.json(usu);
});

app.get("/informacoes", async (req, res) => {
  let i = await Informacao_projeto.findAll(); 
  res.json(i);
});
app.get("/informacoes/:id", async (req, res) => {
  let i = await Informacao_projeto.findByPk(req.params.id); 
  res.json(i);
});

app.get("/administrador", async (req, res) => {
  let adm = await Administrador.findAll(); 
  res.json(adm);
});
app.get("/administrador/:id", async (req, res) => {
  let adm = await Administrador.findByPk(req.params.id); 
  res.json(adm);
});

app.get("/perguntas", async (req, res) => {
  let p = await Perguntas.findAll(); 
  res.json(p);
});
app.get("/perguntas/:id", async (req, res) => {
  let p = await Perguntas.findByPk(req.params.id); 
  res.json(p);
});

app.get("/resenhas", async (req, res) => {
  let r = await Resenhas.findAll(); 
  res.json(r);
});
app.get("/resenhas/:id", async (req, res) => {
  let r = await Resenhas.findByPk(req.params.id); 
  res.json(r);
});

app.get("/avaliacao", async (req, res) => {
  let av = await Avaliacao.findAll(); 
  res.json(av);
});
app.get("/avaliacao/:id", async (req, res) => {
  let av = await Avaliacao.findByPk(req.params.id); 
  res.json(av);
});

app.get("/quizzes", async (req, res) => {
  let q = await Quizzes.findAll(); 
  res.json(q);
});
app.get("/quizzes/:id", async (req, res) => {
  let q = await Quizzes.findByPk(req.params.id); 
  res.json(q);
});
*/
Route("/usuario",app, new Service(Usuarios), authorization);
Route("/hq",app, new Service(HQ), authorization);
Route("/animacao",app, new Service(Animacao), authorization);
Route("/informacoes",app, new Service(Informacao_projeto), authorization);
Route("/perguntas",app, new Service(Perguntas), authorization);
Route("/resenhas",app, new Service(Resenhas), authorization);
Route("/avaliacao",app, new Service(Avaliacao), authorization);
Route("/quizzes",app, new Service(Quizzes), authorization);

async function gerarHash(senhausu) {
  return await bcryptjs.hash(senhausu, 10)
}

app.post("/cadastrar", async (req, res) => {
  const {emailusu, senhausu} = req.body;
  const u = await Usuarios.create({emailusu, admin:false, senhausu:(await gerarHash(senhausu))});
  //u.senhausuefined;
  res.send(u);
})

app.post("/autenticar", async (req, res) => {
  const {emailusu, senhausu} = req.body;
  //const usu = await Usuarios.findByPk(emailusu);
  const usu = await Usuarios.findOne({where:{emailusu}})
  if(!usu || !senhausu) {
    res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(senhausu, usu.senhausu)){
    const token = jsonwebtoken.sign(
      {emailusu},
      process.env.SECRET,
      {expiresIn:3600}
    );
    res.send({emailusu, token})
  } else {
    res.status(400).send("Credenciais inválidas")
  }
})

app.listen(process.env.PORT, () => console.log("Servidor ativo."))

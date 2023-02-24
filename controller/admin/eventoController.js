const { Op } = require('sequelize');
const models = require('../../database/models')
const Evento = models.Evento 

async function lst(req, res) {
  const eventos = await Evento.findAll();
  res.render("admin/evento/lst", {Logado:req.user, Eventos:eventos});};

async function filter(req, res) {
  const eventos = await Evento.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  });
  res.render("admin/evento/lst" , {Logado:req.user, Eventos:eventos});
};

async function opadd(req, res) {
  res.render("admin/evento/add", {Logado:req.user});
};

async function add(req, res) {
  const evento = await Evento.create({
    nome: req.body.nome,
    frase: req.body.frase,
    sobre: req.body.sobre,
    local: req.body.local,
    datainicio: req.body.datainicio,
    datafim: req.body.datafim,
    logo: req.files.logo[0].filename,
    banner: req.files.banner[0].filename,
    fotosobre: req.files.fotosobre[0].filename
  });
  res.redirect('/admin/evento/lst');
};

async function opedt(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  res.render("admin/evento/edt", {Logado:req.user, Evento:evento});
};

async function edt(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  await evento.update({
    nome: req.body.nome,
    frase: req.body.frase,
    sobre: req.body.sobre,
    local: req.body.local,
    datainicio: req.body.datainicio,
    datafim: req.body.datafim,
    logo: req.files['logo'].filename,
    banner: req.files['banner'].filename,
    fotosobre: req.files['fotosobre'].filename
  });
  res.redirect('/admin/evento/lst');
};

async function del(req, res) {
  const evento = await Evento.findByPk(req.params.id);
  await evento.destroy();
  res.redirect('/admin/evento/lst');
};

module.exports = { lst, filter, opadd, add, opedt, edt, del };

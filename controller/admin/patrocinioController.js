const { Op } = require('sequelize');
const models = require('../../database/models')
const Patrocinio = models.Patrocinio 

async function lst(req, res) {
  const patrocinios = await Patrocinio.findAll();
  res.render("admin/patrocinio/lst", {Patrocinios:patrocinios});};

async function filter(req, res) {
  const patrocinios = await Patrocinio.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  });
  res.render("admin/patrocinio/lst" , {Patrocinios:patrocinios});
};

async function opadd(req, res) {
  const eventos = await models.Evento.findAll({});
  res.render("admin/patrocinio/add", {Eventos:eventos});
};

async function add(req, res) {
  const patrocinio = await Patrocinio.create({
    nome: req.body.nome,
    site: req.body.site,
    logo: req.file.filename,
    eventoId: req.body.eventoId
  });
  res.redirect('/admin/patrocinio/lst');
};

async function opedt(req, res) {
  const eventos = await models.Evento.findAll({})
  const patrocinio = await Patrocinio.findByPk(req.params.id);
  res.render("admin/patrocinio/edt", {Patrocinio:patrocinio, Eventos:eventos});
};

async function edt(req, res) {
  const patrocinio = await Patrocinio.findByPk(req.params.id);
  await patrocinio.update({
    nome: req.body.nome,
    site: req.body.site,
    logo: req.file.filename,
    eventoId: req.body.eventoId
  }).catch(function (err) {console.log(err);});
  res.redirect('/admin/patrocinio/lst')
};

async function del(req, res) {
  const patrocinio = await Patrocinio.findByPk(req.params.id);
  await patrocinio.destroy();
  res.redirect('/admin/patrocinio/lst');
};

module.exports = { lst, filter, opadd, add, opedt, edt, del };

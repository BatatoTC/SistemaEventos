const { Op } = require('sequelize');
const models = require('../../database/models')
const Oficina = models.Oficina 

async function lst(req, res) {
  const oficinas = await Oficina.findAll()
  res.render("admin/oficina/lst", {Logado:req.user, Oficinas:oficinas });
}
async function filter(req, res) {
  const oficinas = await Oficina.findAll({
    where:{
      nome: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  })
  res.render("admin/oficina/lst" , {Logado:req.user, Oficinas:oficinas});
}
async function opadd(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  res.render("admin/oficina/add",{Logado:req.user, Eventos:eventos, Ministrantes:ministrantes});
}
async function add(req, res) {
  const oficina = await Oficina.create({
    nome: req.body.nome,
    carga: req.body.carga,
    datahora: req.body.datahora,
    vagas: req.body.vagas,
    ordem: req.body.ordem,
    eventoId: req.body.eventoId
  })
  const arr = [...[req.body.ministranteId]];
  arr.forEach(async function(id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await oficina.addMinistrante(ministrante);
  });
  
  res.redirect('/admin/oficina/lst')
}
async function opedt(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  const oficina = await Oficina.findByPk(req.params.id, { include: 'ministrantes' });
  res.render("admin/oficina/edt", {Logado:req.user, Oficina:oficina, Eventos:eventos, Ministrantes:ministrantes});
}
async function edt(req, res) {
  const oficina = await Oficina.findByPk(req.params.id , { include: 'ministrantes' });
  await oficina.update({
    nome: req.body.nome,
    carga: req.body.carga,
    datahora: req.body.datahora,
    vagas: req.body.vagas,
    ordem: req.body.ordem,
    eventoId: req.body.eventoId
  })
  const arr = [...[req.body.ministranteId]];
  await oficina.removeMinistrantes(oficina.ministrantes)
  arr.forEach(async function(id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await oficina.addMinistrante(ministrante);
  });

  res.redirect('/admin/oficina/lst')
}
async function del(req, res) {
  const oficina = await Oficina.findByPk(req.params.id);
  await oficina.destroy()
  res.redirect('/admin/oficina/lst')
}

module.exports = { lst, filter, opadd, add, opedt, edt, del };
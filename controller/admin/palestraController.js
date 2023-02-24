const { Op } = require('sequelize');
const models = require('../../database/models')
const Palestra = models.Palestra 

async function lst(req, res) {
  const palestras = await Palestra.findAll()
  res.render("admin/palestra/lst", {Logado:req.user, Palestras:palestras });
}
async function filter(req, res) {
  const palestras = await Palestra.findAll({
    where:{
      titulo: {
        [Op.iLike]: '%'+req.body.pesquisar+'%'
      }
    }
  })
  res.render("admin/palestra/lst" , {Logado:req.user, Palestras:palestras});
}
async function opadd(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  res.render("admin/palestra/add",{Logado:req.user, Eventos:eventos, Ministrantes:ministrantes});
}
async function add(req, res) {
  const palestra = await Palestra.create({
    titulo: req.body.titulo,
    resumo: req.body.resumo,
    dataehora: req.body.dataehora,
    eventoId: req.body.eventoId
  })
  const arr = [...[req.body.ministranteId]];
  arr.forEach(async function(id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await palestra.addMinistrante(ministrante);
  });
  
  res.redirect('/admin/palestra/lst')
}
async function opedt(req, res) {
  const eventos = await models.Evento.findAll();
  const ministrantes = await models.Ministrante.findAll();
  const palestra = await Palestra.findByPk(req.params.id, { include: 'ministrantes' });
  res.render("admin/palestra/edt", {Logado:req.user, Palestra:palestra, Eventos:eventos, Ministrantes:ministrantes});
}
async function edt(req, res) {
  const palestra = await Palestra.findByPk(req.params.id , { include: 'ministrantes' });
  await palestra.update({
    titulo: req.body.titulo,
    resumo: req.body.resumo,
    dataehora: req.body.dataehora,
    eventoId: req.body.eventoId
  })
  const arr = [...[req.body.ministranteId]];
  await palestra.removeMinistrantes(palestra.ministrantes)
  arr.forEach(async function(id) {
    const ministrante = await models.Ministrante.findByPk(id)
    await palestra.addMinistrante(ministrante);
  });

  res.redirect('/admin/palestra/lst')
}
async function del(req, res) {
  const palestra = await Palestra.findByPk(req.params.id);
  await palestra.destroy()
  res.redirect('/admin/palestra/lst')
}

module.exports = { lst, filter, opadd, add, opedt, edt, del };
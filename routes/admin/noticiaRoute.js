const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");
const upload = require('../../config/upload');

router.get("/noticia/lst", noticiaController.lst);

router.post("/noticia/lst", noticiaController.filter);

router.get("/noticia/add", noticiaController.opadd);

router.post("/noticia/add", upload.single('foto'), noticiaController.add);

router.get("/noticia/edt/:id", noticiaController.opedt);

router.post("/noticia/edt/:id", upload.single('foto'), noticiaController.edt);

router.get("/noticia/del/:id", noticiaController.del);

module.exports = router;

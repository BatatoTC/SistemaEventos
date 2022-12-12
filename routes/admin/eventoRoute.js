const express = require("express");
const router = express.Router();
const eventoController = require("../../controller/admin/eventoController");
const upload = require('../../config/upload');

router.get("/evento/lst", eventoController.lst);

router.post("/evento/lst", eventoController.filter);

router.get("/evento/add", eventoController.opadd);

router.post("/evento/add", upload.fields([
    {name: 'logo', maxCount: 1},
    {name: 'banner', maxCount: 1},
    {name: 'fotosobre', maxCount: 1}
]), eventoController.add);

router.get("/evento/edt/:id", eventoController.opedt);

router.post("/evento/edt/:id", upload.fields([
    {name: 'logo', maxCount: 1},
    {name: 'banner', maxCount: 1},
    {name: 'fotosobre', maxCount: 1}
]), eventoController.edt);

router.get("/evento/del/:id", eventoController.del);

module.exports = router;

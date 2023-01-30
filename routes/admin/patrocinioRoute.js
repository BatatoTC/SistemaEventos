const express = require("express");
const router = express.Router();
const patrocinioController = require("../../controller/admin/patrocinioController");
const upload = require('../../config/upload');

router.get("/patrocinio/lst", patrocinioController.lst);

router.post("/patrocinio/lst", patrocinioController.filter);

router.get("/patrocinio/add", patrocinioController.opadd);

router.post("/patrocinio/add", upload.single('logo'), patrocinioController.add);

router.get("/patrocinio/edt/:id", patrocinioController.opedt);

router.post("/patrocinio/edt/:id", upload.single('logo'), patrocinioController.edt);

router.get("/patrocinio/del/:id", patrocinioController.del);

module.exports = router;

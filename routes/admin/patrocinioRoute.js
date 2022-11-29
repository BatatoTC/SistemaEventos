const express = require("express");
const router = express.Router();
const patrocinioController = require("../../controller/admin/patrocinioController");

router.get("/admin/lst", patrocinioController.lst);

router.post("/admin/lst", patrocinioController.filter);

router.get("/admin/add", patrocinioController.opadd);

router.post("/admin/add", patrocinioController.add);

router.get("/admin/edt", patrocinioController.opedt);

router.post("/admin/edt", patrocinioController.edt);

router.get("/admin/del", patrocinioController.del);

module.exports = router;

const express = require("express");
const router = express.Router();
const eventoController = require("../../controller/admin/eventoController");

router.get("/admin/lst", eventoController.lst);

router.post("/admin/lst", eventoController.filter);

router.get("/admin/add", eventoController.opadd);

router.post("/admin/add", eventoController.add);

router.get("/admin/edt", eventoController.opedt);

router.post("/admin/edt", eventoController.edt);

router.get("/admin/del", eventoController.del);

module.exports = router;

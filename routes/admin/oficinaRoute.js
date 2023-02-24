const express = require("express");
const router = express.Router();
const oficinaController = require("../../controller/admin/oficinaController");

router.get("/oficina/lst", oficinaController.lst);

router.post("/oficina/lst", oficinaController.filter);

router.get("/oficina/add", oficinaController.opadd);

router.post("/oficina/add", oficinaController.add);

router.get("/oficina/edt/:id", oficinaController.opedt);

router.post("/oficina/edt/:id", oficinaController.edt);

router.get("/oficina/del/:id", oficinaController.del);

module.exports = router;

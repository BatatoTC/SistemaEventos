const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");

router.get("/admin/lst", ministranteController.lst);

router.post("/admin/lst", ministranteController.filter);

router.get("/admin/add", ministranteController.opadd);

router.post("/admin/add", ministranteController.add);

router.get("/admin/edt", ministranteController.opedt);

router.post("/admin/edt", ministranteController.edt);

router.get("/admin/del", ministranteController.del);

module.exports = router;

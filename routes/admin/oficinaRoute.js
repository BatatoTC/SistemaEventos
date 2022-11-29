const express = require("express");
const router = express.Router();
const oficinaController = require("../../controller/admin/oficinaController");

router.get("/admin/lst", oficinaController.lst);

router.post("/admin/lst", oficinaController.filter);

router.get("/admin/add", oficinaController.opadd);

router.post("/admin/add", oficinaController.add);

router.get("/admin/edt", oficinaController.opedt);

router.post("/admin/edt", oficinaController.edt);

router.get("/admin/del", oficinaController.del);

module.exports = router;

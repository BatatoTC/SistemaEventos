const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");

router.get("/admin/lst", noticiaController.lst);

router.post("/admin/lst", noticiaController.filter);

router.get("/admin/add", noticiaController.opadd);

router.post("/admin/add", noticiaController.add);

router.get("/admin/edt", noticiaController.opedt);

router.post("/admin/edt", noticiaController.edt);

router.get("/admin/del", noticiaController.del);

module.exports = router;

const express = require("express");
const router = express.Router();
const palestraController = require("../../controller/admin/palestraController");

router.get("/admin/lst", palestraController.lst);

router.post("/admin/lst", palestraController.filter);

router.get("/admin/add", palestraController.opadd);

router.post("/admin/add", palestraController.add);

router.get("/admin/edt", palestraController.opedt);

router.post("/admin/edt", palestraController.edt);

router.get("/admin/del", palestraController.del);

module.exports = router;

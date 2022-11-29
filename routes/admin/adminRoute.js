const express = require("express");
const router = express.Router();
const adminController = require("../../controller/admin/adminController");

router.get("/admin/lst", adminController.lst);

router.post("/admin/lst", adminController.filter);

router.get("/admin/add", adminController.opadd);

router.post("/admin/add", adminController.add);

router.get("/admin/edt/:id", adminController.opedt);

router.post("/admin/edt/:id", adminController.edt);

router.get("/admin/del/:id", adminController.del);

module.exports = router;

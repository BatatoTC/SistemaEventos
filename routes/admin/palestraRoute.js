const express = require("express");
const router = express.Router();
const palestraController = require("../../controller/admin/palestraController");

router.get("/palestra/lst", palestraController.lst);

router.post("/palestra/lst", palestraController.filter);

router.get("/palestra/add", palestraController.opadd);

router.post("/palestra/add", palestraController.add);

router.get("/palestra/edt/:id", palestraController.opedt);

router.post("/palestra/edt/:id", palestraController.edt);

router.get("/palestra/del/:id", palestraController.del);

module.exports = router;

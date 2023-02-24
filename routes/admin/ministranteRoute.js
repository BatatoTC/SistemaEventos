const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");
const upload = require("../../config/upload");

router.get("/ministrante/lst", ministranteController.lst);

router.post("/ministrante/lst", ministranteController.filter);

router.get("/ministrante/add", ministranteController.opadd);

router.post("/ministrante/add", upload.single('foto'), ministranteController.add);

router.get("/ministrante/edt/:id", ministranteController.opedt);

router.post("/ministrante/edt/:id", upload.single('foto'), ministranteController.edt);

router.get("/ministrante/del/:id", ministranteController.del);

module.exports = router;

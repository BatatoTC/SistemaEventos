const express = require("express");
const router = express.Router();
const loginController = require("../../controller/admin/loginController");

router.get("/", loginController.optela);

router.post("/", loginController.login);

module.exports = router;

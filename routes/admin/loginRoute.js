const express = require("express");
const router = express.Router();
const loginController = require("../../controller/admin/loginController");
const passport = require('../../config/passport')

router.get("/", loginController.abretela);
router.post("/", passport.authenticate('local', {
    successRedirect: '/admin/admin/lst',
    failureRedirect: '/admin'
  })
);

module.exports = router;
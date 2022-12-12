const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');
const passport = require('passport');
//const autenticacao = require('./config/autenticacao');

var moment = require('moment');
app.locals.moment = moment;

const adminRoute = require("./routes/admin/adminRoute");
const eventoRoute = require("./routes/admin/eventoRoute");
const loginRoute = require("./routes/admin/loginRoute");
const ministranteRoute = require("./routes/admin/ministranteRoute");
const noticiaRoute = require("./routes/admin/noticiaRoute");
const oficinaRoute = require("./routes/admin/oficinaRoute");
const palestraRoute = require("./routes/admin/palestraRoute");
const patrocinioRoute = require("./routes/admin/patrocinioRoute");

const porta = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

//app.use("/", publicRoute);
app.use("/admin", loginRoute);
app.use("/admin", adminRoute);
app.use("/admin", eventoRoute);
app.use("/admin", ministranteRoute);
app.use("/admin", noticiaRoute);
app.use("/admin", oficinaRoute);
app.use("/admin", palestraRoute);
app.use("/admin", patrocinioRoute);

app.listen(porta, () => {
  console.log("Servidor funcionando na porta: " + porta);
});

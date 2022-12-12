const models = require('../database/models');
const Admin = models.Admin;
const passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(
    new LocalStrategy(async function (username, password, cb){
      var admin = await Admin.findOne({where: {email: username}});
      
      if(!admin){
        return cb(null, false, {message: "Usuário não existe!"});
      }else{
        if(password != admin.senha){
            return cb(null, false, {message: "Senha incorreta"});
        }else{
            return cb(null, admin);
        }
      };
    })
);

module.exports = passport;

passport.serializeUser(function(user, cb){
    process.nextTick(function(){
        cb(null), {
            id: user.id,
            email: user.email,
            nome: user.nome,
            foto: user.foto
        };
    });
});

passport.deserializeUser(function(user, cb){
    process.nextTick(function(){
        return cb(null, user);
    });
});
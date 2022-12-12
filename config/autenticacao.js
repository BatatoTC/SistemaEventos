module.exports = function(req, res, next){
    if(req.isAutheticated()){
        return next();
    };
    res.redirect('/admin');
};
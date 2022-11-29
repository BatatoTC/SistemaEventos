async function lst(req, res) {
    res.render("admin/evento/lst");
};

async function filter(req, res) {};

async function opadd(req, res) {
    res.render("admin/evento/add");
};

async function add(req, res) {};

async function opedt(req, res) {
    res.render("admin/evento/edt");
};

async function edt(req, res) {};

async function del(req, res) {};

module.exports = { lst, filter, opadd, add, opedt, edt, del };

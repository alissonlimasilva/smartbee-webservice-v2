const Sequelize = require("sequelize");

var { coleta } = require("../models/index");

// SAVE
exports.add = function(req, res) {
  coleta.create({ id_colmeia: 1 });
  res.json(req.body);
};

//LISTA TODAS
exports.getColetaByIdColmeia = function(req, res) {
  const idColmeia = req.params.id_colmeia;

  coleta
    .findAll({
      where: { id_colmeia: idColmeia },
      order: [["createdAt", "ASC"]]
    })
    .then(coletas => res.json(coletas));
};

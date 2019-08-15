const Sequelize = require("sequelize");

var { colmeia } = require("../models/index");

exports.getAllColmeias = function(req, res) {
  colmeia.findAll().then(colmeias => res.json(colmeias));
};

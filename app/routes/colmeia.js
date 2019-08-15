module.exports = function(app) {
  var colmeia = require("../controllers/colmeia");
  //ROTAS
  app.route("/colmeia").get(colmeia.getAllColmeias);
};

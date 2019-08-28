const auth = require("../auth");

module.exports = function(app) {
  var colmeia = require("../controllers/colmeia");
  //ROTAS
  app
    .route("/colmeia")
    .get(auth)
    .get(colmeia.getAllColmeias);
};

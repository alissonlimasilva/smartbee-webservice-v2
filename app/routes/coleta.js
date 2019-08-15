module.exports = function(app) {
  var coleta = require("../controllers/coleta");

  // Colmeia Routes
  // app.route("/colmeia").get(coleta.getAllColmeias);

  //Coleta Routes
  app.route("/coleta/add").post(coleta.add);
  app.route("/coleta/:id_colmeia").get(coleta.getColetaByIdColmeia);
};

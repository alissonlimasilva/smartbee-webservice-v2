module.exports = function(app) {
  var user = require("../controllers/user");
  //ROTAS
  app.route("/auth").post(user.auth);
};

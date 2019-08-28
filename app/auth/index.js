const { user } = require("../models/index");
const jwt = require("jwt-simple");
const segredo = "seusegredodetoken";
const { responseError } = require("../response");

module.exports = async function(req, res, next) {
  //bearer
  var token = req.headers["authorization"];
  if (token) {
    try {
      if (checkBearer(token)) {
        return res
          .status(401)
          .json(responseError("Token Bearer inválido", "401"));
      }
      token = token.replace("Bearer ", "");

      var decoded = jwt.decode(token, segredo);
      console.log("decodando " + decoded);
      if (decoded.exp <= Date.now()) {
        res.json(400, { error: "Acesso Expirado, faça login novamente" });
      }
      const usuario = await user.findOne({ where: { id: decoded.iss } });
      if (!usuario)
        return res.status(401).json(responseError("Token inválido", "401"));
      return next();
    } catch (err) {
      return res.status(401).json(responseError("Token inválido", "401"));
    }
  } else {
    return res
      .status(401)
      .json(responseError("Token não informado ou inválido", "401"));
  }
};

function checkBearer(token) {
  return !token.startsWith("Bearer ");
}

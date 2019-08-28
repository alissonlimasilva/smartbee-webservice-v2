const jwt = require("jwt-simple");
const moment = require("moment");
const segredo = "seusegredodetoken";
const bcrypt = require("bcrypt-nodejs");

const { responseError, responseAuth } = require("../response");
const { user } = require("../models/index");

exports.auth = async function(req, res) {
  const { login, password } = req.body;
  if (!login || !password) {
    return res
      .status(401)
      .json(responseError("Usuário ou senha não informados", "401"));
  }
  const usuario = await user.findOne({ where: { email: login } });
  if (!usuario)
    return res.status(401).json(responseError("Usuário não encontrado", "401"));

  checkPassword(usuario, password, res);
};

function checkPassword(user, password, res) {
  if (password === user.password) {
    const expires = moment()
      .add(7, "days")
      .valueOf();
    const token = jwt.encode(
      {
        iss: user.id,
        exp: expires
      },
      segredo
    );
    user.password = undefined;
    return res.json(responseAuth(token, user, expires));
  } else {
    return res
      .status(401)
      .json(responseError("Usuário ou senha inválidos", "401"));
  }
}

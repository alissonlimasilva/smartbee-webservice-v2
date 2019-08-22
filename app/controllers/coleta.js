const { responseError, responseSuccess } = require("../response");

const Sequelize = require("sequelize");
var { coleta, colmeia, sensor, coleta_data } = require("../models/index");

// SAVE
/**
 * {
 *  id_colmeia: [valor],
 *  values: {
 *    temperatura: [valor],
 *    ....
 *  }
 * }
 */
exports.add = async function(req, res) {
  const body = req.body;
  if (!idColmeiaIsValid(body.id_colmeia)) {
    res
      .status(401)
      .json(responseError("Campo id_colmeia não informado", "401"));
    return;
  }
  console.log(body.id_colmeia);
  await checkIfColmeiaExist(body.id_colmeia, res);
  if (!body.values) {
    res
      .status(401)
      .json(responseError("Não foi informado amostras na coleta.", "401"));
  }
  checkColeta(body, res);
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

function idColmeiaIsValid(id_colmeia) {
  id_colmeia = parseInt(id_colmeia, 10);
  if (isNaN(id_colmeia)) return false;
  return true;
}

async function checkIfColmeiaExist(id_colmeia, res) {
  try {
    const result = await colmeia.findOne({ where: { id: id_colmeia } });
    return result;
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(401).json(responseError("Colmeia informada não existe", "401"));
  }
}

async function checkColeta(body, res) {
  const samples = [];
  const { values, id_colmeia } = body;
  const sensors = await sensor.findAll();
  if (!sensors) {
    res.status(404).json(responseError("Não há nenhum sensor cadastrado"));
    return;
  }
  const valuesKeys = Object.keys(values);

  valuesKeys.forEach(key => {
    sensors.forEach(sensor => {
      if (key === sensor.name) {
        samples.push({
          id_sensor: sensor.id,
          value: values[key]
        });
      }
    });
  });

  if (samples.length > 0) {
    saveColeta(id_colmeia, samples, res);
    return;
  }
  res
    .status(401)
    .json(responseError("Não foi informado valores da coleta.", "401"));
}

async function saveColeta(id_colmeia, samples, res) {
  coleta
    .create({ id_colmeia })
    .then(newColeta => {
      samples = samples.map(sample =>
        Object.assign(sample, { id_coleta: newColeta.id })
      );
      coleta_data.bulkCreate(samples);
      res.json(responseSuccess("Coleta salva com sucesso"));
    })
    .catch(error =>
      res
        .status(500)
        .json(responseError("Ocorreu um erro ao salvar a coleta", "500"))
    );
}

const { sensor } = require("./app/models");

const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("V2 webservice Smartbee");
});

require("./app/routes/colmeia")(app);
require("./app/routes/coleta")(app);

app.listen(3000);

const basicAuth = require("express-basic-auth");

const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  basicAuth({
    users: { smartbee: "b29f5d3d26a2a587901a61c828e6a62b" }
  })
);

app.get("/", (req, res) => {
  res.send("V2 webservice Smartbee");
});

require("./app/routes/colmeia")(app);
require("./app/routes/coleta")(app);

app.listen(3000);

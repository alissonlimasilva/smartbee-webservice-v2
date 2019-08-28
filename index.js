const basicAuth = require("express-basic-auth");
const cors = require("cors");
const jwt = require("jwt-simple");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   basicAuth({
//     users: { smartbee: "b29f5d3d26a2a587901a61c828e6a62b" }
//   })
// );

app.get("/", (req, res) => {
  res.send("V2 webservice Smartbee");
});

require("./app/routes/colmeia")(app);
require("./app/routes/coleta")(app);
require("./app/routes/user")(app);

app.listen(3000);

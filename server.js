var _express = require("express");
var _methodOverride = require("method-override");
var _bodyParser = require("body-parser");
var _exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;
var app = express();
var routes = require(".controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({defaultLayout: "main "}));
app.set("view engine", "handlebars");

app.use("/", routes);
app.listen(port);
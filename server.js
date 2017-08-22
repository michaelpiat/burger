var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("-method"));

var exphbs = require("express-handlebars");

app.engine("habdlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use("/", routes);

app.listen(port, function() {
	console.log("Listning on PORT " + port);
});
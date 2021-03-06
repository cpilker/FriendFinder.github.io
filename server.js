// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('app/public'))

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
  });


// dependencies

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8080;

// create app/form url encoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// express
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// server start
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// routing



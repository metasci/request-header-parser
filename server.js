
var express = require('express');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendfile(process.cwd() + "/public/index.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("listening on port " + port + "...");
});

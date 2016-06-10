
var express = require('express');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

// app.get('/', function(req, res) {
//   res.send(JSON.stringify(req.headers));
// });

app.get('/', function(req, res) {
  res.json({
              "ip" : req.headers['x-forwarded-for'],
              "language" : req.headers["accept-language"].split(',')[0],
              "software" : req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("listening on port " + port + "...");
});

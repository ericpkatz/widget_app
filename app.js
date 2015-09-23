var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');

swig.setDefaults({cache: false});

var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/api/widgets', require('./api'));

app.get('/', function(req, res){
  res.render('index');
});

if(!process.env.PORT)
  console.log('set port please');

app.listen(process.env.PORT);

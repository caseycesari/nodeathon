var express = require('express');
var sass = require('node-sass');
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

var app = express();

// https://github.com/visionmedia/express/blob/master/examples/ejs/index.js
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// https://github.com/andrew/node-sass
app.use(sass.middleware({
  src: __dirname + '/sass/',
  dest: __dirname + '/public/',
  debug: true,
  force: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', {
    title: 'Nodeathon'
  });
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Express started on port ' + port);

// make the express server available when this file is required
module.exports = app;
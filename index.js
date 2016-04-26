var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/contact', function(request, response) {
  response.render('pages/contact');
});
app.get('/services', function(request, response) {
  response.render('pages/services');
});
app.get('/specials', function(request, response) {
  response.render('pages/specials');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



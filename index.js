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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://heroku_d58bh1wm:m3f37fh3q0sodg1lct1vbb97s0@ds063899.mlab.com:63899/heroku_d58bh1wm'

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('foods')
  collection.insert({name: 'taco', tasty: true}, function(err, result) {
    collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
})
var db = require('./db')
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
//app.use('/test', require('./in_out'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes //
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(req, res){
  console.log('the test route worked');
  res.send('the test route worked');
});

app.get('/in-url-params', function(req, res) {
//assuming a url that looks like /in-url-params?rssi=50&base=home
  var rssi = req.query.rssi || 'unknown';
  var base = req.query.base || 'unknown';
  console.log("rssi: ", rssi);
  console.log("base: ", base);

  // in here you'd probably do something smart to 
  // make sure that the data isn't bullshit or malicious

  var collection = db.get().collection('beaconData')
  collection.insert({rssi: rssi, base: base},
    function(err, result){
      console.log('that seemed to work', result);
      res.send(result);
    });
})

app.get('/out-url-params-base', function(req, res) {
//assuming a url that looks like /out-url-params?base=home
  console.log('request: ', req.query);
  var base = req.query.base;

  if(base){
    var collection = db.get().collection('beaconData')
    collection.find({base: base},
      function(err, result){
        // This looks super confusing, but let me try to explain.
        // A mongo find returns a cursor, not a document or array
        // of documents. .toArray() turns the cursor into a document
        // array, BUT it returns a promise so to deal with that we
        // call .then() and give it a callback to do once we the promise
        // resolves. 
        result.toArray().then(function(r){
          console.log('that seemed to work', r );
          res.send( r );
        });
      });
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// Connect to Mongo on start
var mongoURL = 'mongodb://heroku_d58bh1wm:m3f37fh3q0sodg1lct1vbb97s0@ds063899.mlab.com:63899/heroku_d58bh1wm'
db.connect(mongoURL, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})
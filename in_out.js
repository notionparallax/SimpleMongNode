var express = require('express')
  , router = express.Router()

var db = require('./db')

//assuming a url that looks like /in-url-params?rssi=50&base=home
router.get('/in-url-params', function(req, res) {
  console.log("Just received a request of:", req);
  var rssi = req.query.rssi;
  var base = req.query.base;
  console.log("rssi: ", rssi);
  console.log("base: ", base);

  // in here you'd probably do something smart to 
  // make sure that the data isn't bullshit or malicious

  var collection = db.get().collection('beaconData')
  db.collection('beaconData').insert({rssi: rssi, base: base});

  // collection.find().toArray(function(err, docs) {
  //   res.render('beaconData', {comments: docs})
  // })
})

// router.get('/out', function(req, res) {
//   var collection = db.get().collection('comments')

//   collection.find().sort({'date': -1}).limit(100).toArray(function(err, docs) {
//     res.render('comments', {comments: docs})
//   })
// })

module.exports = router
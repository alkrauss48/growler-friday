var express = require('express');
var app = express();
var Twit = require('twit')
var conf = require('./conf.json')

var T = new Twit({
  consumer_key:         conf.twitter.consumer_key,
  consumer_secret:      conf.twitter.consumer_secret,
  access_token:         conf.twitter.access_token,
  access_token_secret:  conf.twitter.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get-tweets', function (req, res) {
  T.get('search/tweets', { q: '#growlerfriday', count: 3, result_type: 'recent'}, function(err, data, response) {
    res.send(data)
  })
});

app.listen(3005, function () {
  console.log('Listening on port 3005!')
});

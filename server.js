var express = require('express');
var app = express();
var Codebreaker = require('./Codebreaker');
let codebreaker = new Codebreaker();

app.set('port', (process.env.PORT) || 3000);

app.get('/setsecret/:secret', function (req, res){
  number = req.params.secret;
  codebreaker.setNumber(number);
  res.send({message: 'OK, let the game begin'});
});

app.get('/guess/:number', function (req, res){
  number = req.params.number;
  response = codebreaker.adivinar(number);
  res.send({result: response});
})

app.listen(app.get('port'), function(){
  console.log('Server listen on port: 3000');
});
module.exports = app;

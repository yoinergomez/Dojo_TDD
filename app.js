var server = requiere('./server')

server.set('port', (process.env.PORT) || 3000);
server.listen(app.get('port'), function(){
  console.log('Server listen on port: 3000');
});
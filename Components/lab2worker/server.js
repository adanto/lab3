// Hello World server in Node.js
// Connects REP socket to tcp://*:8002
// Expects "Hello" from client, replies with "World"

//node lbworker tcp://localhost:8002 ¿? I_am_ready true(<-- verbose) mensaje a enviar

var zmq = require('zmq')
  , responder = zmq.socket('rep')
  , infoSender = zmq.socket('req')
  , config = require('config');


//responder.identify="something";
responder.identify=config.connection.id;
responder.connect(config.connection.port);
infoSender.connect(config.connection.port + 2);

//responder.send(process.argv[4]); <-- I'm ready (worker)
//responder.send(process.argv[5]); <-- Modo verbose
console.log("Worker conectado a "+config.connection.port);
responder.on('message', function(msg) {
  console.log('received request:', msg.toString());
  setTimeout(function() {
  var text=config.message;

  json = [
      {"text": text},
      {"verbose": config.connection.verbose},
      {"active": config.connection.id}];

    responder.send(JSON.stringify(json));
  },config.connection.something);
});
/*
setInterval(function(){
  responder.send("Esto es un mensaje");
  infoSender.send('hi');
  console.log("sending");
}, 3000);
*/
// Simple request-reply broker in Node.js
//node lbbroker 8001 8002

var zmq      = require('zmq')
  , frontendRouter = zmq.socket('router')
  , backendDealer  = zmq.socket('dealer')
  , frontendDealer = zmq.socket('dealer')
  , backendRouter  = zmq.socket('router')
  , workers = 0
  , list
  , config = require('config');

//Creamos una variable de tipo lista para ir almacenando los ids de los trabajadores 

frontendRouter.bindSync('tcp://*:'+config.frontend.port);
backendDealer.bindSync('tcp://*:'+config.backtend.port);
frontendDealer.bindSync('tcp://*:'+config.frontend.port+2);
backendRouter.bindSync('tcp://*:'+config.backtend.port+2);


console.log("Broker conectado. Frontend:"+process.argv[2]+", backend:"+ process.argv[3]);
frontendRouter.on('message', function() {
  // Note that separate message parts come as function arguments.
  var args = Array.apply(null, arguments);

  // Pass array of strings/buffers to send multipart messages.
  backendDealer.send(args);
});

backendDealer.on('message', function(msg) {
  console.log("Rep from worker");
  var args = Array.apply(null, arguments);
  console.log(msg.toString());
  //var message = JSON.parse(args);
  //console.log(message.msg);
  frontendRouter.send(args);
  console.log(args+"\n"+arguments);
});


backendDealer.on('message', function(msg){
  console.log("Hola "+msg.toString());
  //list{workers}=msg;
});


// Hello World client in Node.js
// Connects REQ socket to tcp://localhost:8001
// Sends "Hello" to server, expects "World" back


//node lbclient tcp://localhost:8001 1(numero de peticiones 
//que siempre tiene que ser 1) id1 (identificador) mensajes a enviar 


var zmq       = require('zmq')
  , requester = zmq.socket('req');
var config = require('config');

requester.connect(config.connection.port);
requester.identify=config.connection.id;
var replyNbr = 0;

console.log("Cliente conectado a "+config.connection.port);
requester.on('message', function(msg) {
   console.log('got reply', replyNbr, msg.toString());
   replyNbr += 1;
   if(replyNbr == config.connection.peticiones)
      process.exit();
   });
   var text="";
   for (var i = 0; i <config.connection.peticiones; ++i){  
   var text="";
	for(var j=5; j<process.argv.length; j++){
	    text+=process.argv[j]+" ";
	}
	requester.send(text);
}

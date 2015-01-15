module.exports = {
		external : {
			web: 8000
		},
		provides : {
			routerport : "8001"
		}
      connection : {
         port: "tcp://localhost:8001"
         peticiones: 5
         id: "Me"
      }
      message : "Hola que tal. Esto es el mensaje desde un modulo"
};
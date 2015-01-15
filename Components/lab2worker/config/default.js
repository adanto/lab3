module.exports = {
		external : {
			web: 8000
		},
		provides : {
			routerport : "8001"
		}
      connection : {
         port : "tcp://localhost:8002"
         something : 1000
         id : "I_am_here"
         verbose : true
      }
      message : "Hi, work done"
};
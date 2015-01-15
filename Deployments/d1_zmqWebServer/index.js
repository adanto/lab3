module.exports = {
	servicePath: require.resolve("../../Services/zmqWebServer"),
	counts: {
		lab2broker : 1
		lab2worker : 1
		lab2client : 1
	},
	config: {
		lab2broker: {
			external: {
				web: 80
			}
		},
		lab2broker: {
			parameter: {
				maxload: 2
			}
		}
	}
};
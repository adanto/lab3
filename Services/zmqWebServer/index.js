module.exports = {
	components: {
		lab2broker: {
			location: require.resolve("../../Components/lab2broker"),
			image: "tsir/lab2broker"
		},
	    lab2client: {
	    	location: require.resolve("../../Components/lab2client"),
	    	image: "tsir/lab2client"
	    },
	    lab2worker: {
	    	location: require.resolve("../../Components/lab2worker"),
	    	image: "tsir/lab2worker"
	    }
	}
};

new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',
	data: {

	},
	methods: {

		logName: function (event) {
			console.log(event.target.value);
		},

		logAge: function (event) {
			console.log(event.target.value);
		}
	}
});

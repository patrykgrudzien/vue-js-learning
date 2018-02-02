new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',

	data: {
		health: 100,
		ended: false
	},

	methods: {

		punch: function () {
			this.health -= 10;
			if (this.health <= 0) {
				this.ended = true;
			}
		},

		restart: function () {
			this.health = 100;
			this.ended = false;
		}
	},

	computed: {

	}

});

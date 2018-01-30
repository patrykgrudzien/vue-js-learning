new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',

	data: {
		available: false,
		nearby: false
	},

	methods: {

	},

	computed: {
		computedClasses: function () {
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}

});

new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',
	data: {
		name: 'Patryk',
		job: 'Developer'
	},
	methods: {
		greet: function(word) {
			return `Good ${word} ${this.name}!`;
		}
	}
});
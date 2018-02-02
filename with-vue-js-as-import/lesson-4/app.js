new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',
	data: {
		name: 'Patryk',
		job: 'Developer',
		website: 'https://www.google.pl',
		allegro: 'https://www.allegro.pl',
		
		websiteTag: '<a href="https://www.google.pl" >Google in Tag</a>'
	},
	methods: {
		greet: function(word) {
			return `Good ${word} ${this.name}!`;
		}
	}
});
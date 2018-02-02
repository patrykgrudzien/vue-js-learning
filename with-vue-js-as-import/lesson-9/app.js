new Vue({
	// this Vue instance is gonna control #vue-app element
	el: '#vue-app',

	data: {
		age: 27,
		a: 0,
		b: 0
	},

	methods: {

	},

	computed: {

		addToA: function () {
			console.log('addToA()');
			return this.a + this.age;
		},

		addToB: function () {
			console.log('addToB()');
			return this.b + this.age;
		}
	}
});

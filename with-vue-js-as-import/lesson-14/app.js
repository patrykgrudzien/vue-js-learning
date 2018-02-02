var one = new Vue({
	el: '#vue-app-one',

	data: {
		title: 'Vue App One'
	},

	methods: {

	},

	computed: {
		// ES6 syntax
		greet() {
			return 'Hello from app one :)';
		}
	}

});


var two = new Vue({
	el: '#vue-app-two',

	data: {
		title: 'Vue App Two'
	},

	methods: {
		changeTitle() {
			one.title = 'New Title';
		}
	},

	computed: {
		// OLD syntax
		greet: function () {
			return 'This is app two :)';
		}
	}

});


// WE CAN ALSO CHANGE "title" OUTSIDE OF ALL VUE INSTANCES ABOVE
two.title = 'Title from outside';

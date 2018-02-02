// Component is just a re-usable piece of code or template that we can use in different Vue instances

Vue.component('greeting', {

	// when we use this component everything which is inside template will be rendered
	template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',

	// we can also pass here data but instead of OBJECT as it was in Vue instance we have to have here FUNCTION, because everytime when we inject this component to different place we want to have fresh component with fresh data (if we used here not FUNCTION but OBJECT all that data would be shared between all Vue instances which would use this component).
	data: function () {
		return {
			name: 'Patryk'
		}
	},

	methods: {
		changeName() {
			this.name = 'Somebody else';
		}
	}

});


new Vue({
	el: '#vue-app-one',

	data: {},

	methods: {},

	computed: {}

});


new Vue({
	el: '#vue-app-two',

	data: {},

	methods: {},

	computed: {}

});

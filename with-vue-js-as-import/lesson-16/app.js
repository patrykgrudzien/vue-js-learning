new Vue({
	el: '#vue-app',

	data: {
		inputValue: ''
	},

	methods: {
		readRefs() {
			// it will give us list of all references within scope of #vue-app VUE instance
			console.log(this.$refs);
			console.log(this.$refs.myInputReference.value);

			this.inputValue = this.$refs.myInputReference.value;
		}
	},

	computed: {}

});

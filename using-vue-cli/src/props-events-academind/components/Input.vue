<template>
  <div>
    <label for="simple-input"></label>
    <!-- @input="changeMessage" it means -> fire method changeMessage() on typing in input field -->
    <!-- @input="changeMessage" is THE SAME as v-on:input="changeMessage" -->
    <input id="simple-input" type="text" :value="msg" @input="changeMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data() {
      return {
        message: ''
      };
    },
    methods: {
      changeMessage(event) {
        this.message = event.target.value;
        this.$emit('messageChanged', this.message);
      }
    }
  };
</script>

<style scoped>

</style>

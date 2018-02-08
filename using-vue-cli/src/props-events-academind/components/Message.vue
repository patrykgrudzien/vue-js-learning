<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- The same here: -->
    <!-- v-on:messageChanged="" is THE SAME as @messageChanged="" -->
    <app-input :msg="message" @messageChanged="message = $event" />
  </div>
</template>

<script>
  import Input from './Input';

  export default {
    components: {
      'app-input': Input
    },
    data() {
      return {
        message: 'This is a great Message!'
      };
    }
  };
</script>

<style scoped>

</style>

<template>
  <div>
    <add-blog/>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';

  export default {
    components: {
      'add-blog': addBlog
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>

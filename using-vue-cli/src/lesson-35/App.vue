<template>
  <div>
    <show-blogs/>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  import showBlogs from './components/showBlogs'

  export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs
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

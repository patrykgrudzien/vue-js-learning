<template>
  <div>
    <app-header/>
    <!-- Instead of HARDCODED <show-blogs/> we have to use: -->
    <router-view/>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  import showBlogs from './components/showBlogs'
  import listBlogs from './components/listBlogs'
  import appHeader from './components/header'

  export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs,
      'app-header': appHeader
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

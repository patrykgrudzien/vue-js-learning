<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h2>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        blogs: []
      }
    },
    methods: {},
    // when component is created
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.blogs = response.data.slice(0,10);
      }).catch((error) => {
        console.log(error);
      })
    }
  };
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0px auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #ddd;
  }
</style>

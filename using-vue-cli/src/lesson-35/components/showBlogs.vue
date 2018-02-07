<template>
  <div v-columnWidth="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">

      <!--
      FILTER - we can use it to change output of a data to the browser

      IMPORTANT NOTE:
      Filters DO NOT change data directly wherever we store it !!!

      SYNTAX:
      {{ blog.title | filter-name }}
      -->

      <h2>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | cut-text }}</article>
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

<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>

    <!--
        We would like to change data using FILTER.

        Unfortunately Vue.js really does NOT like it anymore (performance impact) !!!
        It's suggested to create custom search filters using COMPUTED !!!
      -->

    <!-- CUSTOM SEARCH BOX -->
    <input type="text" v-model="search" placeholder="Search blogs by title">

    <div v-for="blog in filteredBlogs" class="single-blog">
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
        blogs: [],
        search: ''
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
    },
    computed: {
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
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

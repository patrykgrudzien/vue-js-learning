<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs by title">

    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2>{{ blog.title }}</h2>
    </div>
  </div>
</template>

<!--
    ROUTING:
    It's not provided by default with Vue.js and we NEED TO INSTALL additional library (vue-router) !!!
-->

<script>
  import searchMixin from '../mixins/searchMixin';

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
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.blogs = response.data.slice(0,10);
      }).catch((error) => {
        console.log(error);
      })
    },
    computed: {},
    mixins: [ searchMixin ]
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

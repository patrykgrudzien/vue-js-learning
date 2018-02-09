<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs by title">

    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="`/blog/${blog.id}`"><h2>{{ blog.title }}</h2></router-link>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<!--
    ROUTING:
    It's not provided by default with Vue.js and we NEED TO INSTALL additional library (vue-router) !!!

    We can see in the URL that we have '#' there what we don't want -> http://localhost:8080/#/
    It's because by default router uses HASH MODE !!!

    HASH mode allows VUE to navigate between pages without calling server each time where to go.
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

<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs by title">

    <circle-spinner v-if="blogsLoading" style="margin: 0 auto"/>

    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link class="title" v-bind:to="`/blog/${blog.id}`"><h2>{{ blog.title }}</h2></router-link>
      <p>{{ blog.author }}</p>
      <article>{{ blog.blogContent }}</article>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin';
  import CircleSpinner from 'vue-loading-spinner/src/components/Circle8'

  export default {
    components: {
      'circle-spinner': CircleSpinner
    },
    data() {
      return {
        blogs: [],
        search: '',
        blogsLoading: true
      }
    },
    methods: {},
    created() {
      this.axios.get('https://vue-js-simple-blog-project.firebaseio.com/posts.json')
          .then((response) => {
            this.blogsLoading = false;
            let blogsArray = [];

            for (let key in response.data) {
            // here we want to add additional property "id" to each blog we're currently on in this for loop
            response.data[key].id = key;
            blogsArray.push(response.data[key]);
            }

            this.blogs = blogsArray;

          }).catch((error) => {
            console.log(error);
          })
    },
    computed: {},
    mixins: [searchMixin]
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

  .title {
    text-decoration: none;
    color: black;
  }

  .title:hover {
    color: blueviolet;
  }
</style>

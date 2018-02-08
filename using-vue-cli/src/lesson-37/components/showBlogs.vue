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

      <h2 v-randomFontColor>{{ blog.title | to-uppercase }}</h2>
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
        this.blogs = response.data.slice(0, 10);
      }).catch((error) => {
        console.log(error);
      })
    },

    // REGISTERING FILTERS & DIRECTIVES LOCALLY
    filters: {
      'to-uppercase': function (valueFromH2) {
        return valueFromH2.toUpperCase();
      },
      'cut-text': (valueFromArticle) => {
        return valueFromArticle.slice(0, 100) + '...';
      }
      /*
       * We can replace syntax above with:
       * cutText(valueFromArticle) {
       *    return valueFromArticle.slice(0, 100) + '...';
       * };
       *
       * BUT we need to REMEMBER that here NAME of filter is written using CAMEL CASE !!!
       */
    },
    directives: {
      'randomFontColorOldWay': {
        bind(el, binding, vnode) {
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      },
      randomFontColor(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);

        if (binding.arg === 'capitalLetters') {
          el.style.textTransform = 'uppercase';
          el.style.fontSize = '20px';
        }
      },
      columnWidth(el, binding) {
        if (binding.value === 'wide') {
          el.style.maxWidth = '1200px';
        } else if (binding.value === 'narrow') {
          el.style.maxWidth = '600px';
        }
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

<template>
  <div id="single-blog">
    <circle-spinner v-if="blogsLoading" style="margin: 0 auto"/>
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.blogContent }}</article>
  </div>
</template>

<script>
  import CircleSpinner from 'vue-loading-spinner/src/components/Circle8'

  export default {
    components: {
      'circle-spinner': CircleSpinner
    },
    data() {
      return {
        // we can grab here ROUTE PARAMETER (request param)
        // "id" is out param we specified in "allRoutes.js" (path: '/blog/:id')
        id: this.$route.params.id,
        blog: {},
        blogsLoading: true
      }
    },
    created() {
      // LOOK CAREFULLY at this URL
      this.axios.get(`https://vue-js-simple-blog-project.firebaseio.com/posts/${this.id}.json`)
          .then((response) => {
            this.blogsLoading = false;
            console.log(response);
            this.blog = response.data;
          });
    }
  };
</script>

<style scoped>
#single-blog {
  max-width: 800px;
  margin: 0 auto;
}
</style>

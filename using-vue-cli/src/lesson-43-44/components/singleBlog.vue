<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.blogContent }}</article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // we can grab here ROUTE PARAMETER (request param)
        // "id" is out param we specified in "allRoutes.js" (path: '/blog/:id')
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      // LOOK CAREFULLY at this URL
      this.axios.get(`https://vue-js-simple-blog-project.firebaseio.com/posts/${this.id}.json`)
          .then((response) => {
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

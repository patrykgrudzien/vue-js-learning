<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
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
      this.axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
          .then((response) => {
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

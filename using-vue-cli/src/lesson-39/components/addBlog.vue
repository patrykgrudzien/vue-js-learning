<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!isFormSubmitted">
      <!-- BLOG TITLE -->
      <label for="blog-title">Blog Title:</label>
      <input v-model.lazy="blog.title" id="blog-title" type="text" required>

      <!-- BLOG CONTENT -->
      <label for="blog-content">Blog Content:</label>
      <textarea v-model.lazy="blog.blogContent" id="blog-content"></textarea>

      <!-- CHECKBOXES -->
      <div id="checkboxes">
        <!-- we CAN pass to v-model="" ONLY ONE OBJECT and VUE will take care of everything what is selected -->
        <label for="category-1">Ninjas</label>
        <!-- value="" keeps value which will be sent to model (blog.categories) when we select this checkbox -->
        <input v-model="blog.categories" id="category-1" type="checkbox" value="ninjas"/>

        <!-- For checkbox we use v-model="" to EACH checkbox (for <select> we need it only once) -->
        <label for="category-2">Wizards</label>
        <input v-model="blog.categories" id="category-2" type="checkbox" value="wizards"/>

        <label for="category-3">Mario</label>
        <input v-model="blog.categories" id="category-3" type="checkbox" value="mario"/>

        <label for="category-4">Cheese</label>
        <input v-model="blog.categories" id="category-4" type="checkbox" value="cheese"/>
      </div>

      <!-- AUTHOR: -->
      <!-- In case of <select> we use v-model="" only to main <select>, NOT to each single <option> !!! -->
      <label for="select-box">Author:</label>
      <select v-model="blog.author" id="select-box">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <!-- SUBMIT THE FORM (we must prevent default behavior for submitting form) -->
      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="isFormSubmitted">
      <h3>Thanks for adding your post!</h3>
    </div>

    <!-- PREVIEW -->
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.blogContent }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        blog: {
          title: '',
          blogContent: '',
          categories: [],
          author: ''
        },
        authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
        isFormSubmitted: false
      }
    },
    methods: {
      // SMALL NOTE: I had to replace VUE_RESOURCE with AXIOS (that first one didn't want to wok)
      post() {
        // $http comes from VUE-RESOURCE
        // we don't have now any service, database to make post to (we're gonna use online service)
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          // body to post
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then((response) => {
          this.isFormSubmitted = true;
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  };
</script>

<style scoped>
  #add-blog * {
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea {
    display: block;
    width: 100%;
    max-width: 500px;
    padding: 8px;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }

  #checkboxes {
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
  }

  input[type="checkbox"] {
    margin-right: 20px;
  }
</style>

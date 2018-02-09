<template>
  <nav>
    <ul>
      <!--
          WE COULD USE THESE BELOW BUT WE'RE GONNA DO IT BETTER
          <li><a href="/">Home</a></li>
          <li><a href="/add-blog">Add Blog</a></li>
      -->
          <!-- <router-link> IS PROVIDED BY VueRouter
          (it's better because it intercepts click event and MOST IMPORTANT -
          WE DO NOT RELOAD THE PAGE !!!)
      -->
      <li>
        <!-- We want to add (router-link-active) class to EXACT URL we are in !!! -->
        <router-link to="/" exact>Blogs</router-link>
      </li>
      <li>
        <router-link to="/add-blog" exact>Add a New Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {};
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }

  nav {
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }

  .router-link-active {
    background: #eee;
    color: #444;
  }
</style>

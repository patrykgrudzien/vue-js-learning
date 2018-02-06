<template>
  <div>
    <form-helper>
      <!-- HEADER -->
      <div slot="form-header-slot">
        <h3>Form Two - Log in</h3>
        <p>Enter your details to log-in</p>
      </div>

      <!-- FIELDS -->
      <div slot="form-fields-slot">
        <input type="text" placeholder="username" required>
        <input type="password" placeholder="password" required>
      </div>

      <!-- CONTROLS -->
      <div slot="form-controls-slot">
        <button @click="handleSubmit">Login</button>
      </div>

    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper';

  export default {
    components: {
      'form-helper': formHelper
    }
  };
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  form {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  #useful-links ul {
    padding: 0;
  }

  #useful-links li {
    display: inline-block;
    margin-right: 10px;
  }

  form > div {
    padding: 20px;
    background: #ddd;
    margin: 20px 0;
  }

  #form-header {
    background: #ddd;
    border: 1px solid #bbb;
  }
</style>

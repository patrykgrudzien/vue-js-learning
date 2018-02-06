<template>
  <div>
    <form-helper>
      <!-- HEADER -->
      <div slot="form-header-slot">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>

      <!-- FIELDS -->
      <div slot="form-fields-slot">
        <input type="text" placeholder="name" required>
        <label>Your Message:</label>
        <textarea title="message"></textarea>
      </div>

      <!-- CONTROLS -->
      <div slot="form-controls-slot">
        <button @click="handleSubmit">Send</button>
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

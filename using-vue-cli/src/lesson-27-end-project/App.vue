<template>
  <div>
    <form-helper>
      <!-- HEADER -->
      <div slot="form-header-slot">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <!-- FIELDS -->
      <div slot="form-fields-slot">
        <input type="text" placeholder="name" required/>
        <input type="password" placeholder="password" required/>
      </div>

      <!-- CONTROLS -->
      <div slot="form-controls-slot">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './components/formHelper';

  export default {

    components: {
      'form-helper': formHelper
    },

    data() {
      return {
        title: 'I am dynamic slot title'
      };
    },

    methods: {},
  };
</script>

<style scoped>
</style>

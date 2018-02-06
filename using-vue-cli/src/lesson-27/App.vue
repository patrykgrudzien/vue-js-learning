<template>
  <div>
    <!-- we can pass HTML code to form-helper using slot (v-bind:title="" was used to transfer props !!!) -->
    <!-- <slot> must be placed in formHelper.vue -->
    <form-helper>
      <!-- if we want to put dynamic value here, we need to do it in component where we initialize form-helper -> App-->
      <h2 slot="slot_above">{{ title }}</h2>
      <p slot="slot_below">I am the paragraph text for the slot</p>
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

<template>
  <div>
    <!--
    using just <slot/> we are gonna insert here everything what is placed between

      <form-helper>
        ...
      </form-helper>

    in App.vue
    -->
    <slot name="slot_above"/>
    <h1>I am the form helper</h1>
    <!-- this slot comes from App.vue where we are using <form-helper> -->
    <!-- specifying name="" we are taking only named slot from App.vue -->
    <slot name="slot_below"/>
  </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>

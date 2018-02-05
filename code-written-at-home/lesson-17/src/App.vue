<template>
  <div>
    <header-component/>
    <ninjas-component/>
    <footer-component/>
  </div>
</template>

<script>
  import HeaderComponent from './components/Header';
  import FooterComponent from './components/Footer';
  import NinjasComponent from './components/Ninjas';

  export default {
    components: {
      'header-component': HeaderComponent,
      'ninjas-component': NinjasComponent,
      'footer-component': FooterComponent
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
</style>

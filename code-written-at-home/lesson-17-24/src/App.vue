<template>
  <div>
    <header-component v-bind:title="title" v-on:change-title-event="updateTitle($event)"/>
    <!-- SENDING ninjas array[] to Ninjas.vue -->
    <!-- we use "v-bind" to make it dynamic -->
    <ninjas-component v-bind:ninjas="ninjas"/>
    <footer-component v-bind:title="title"/>
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
      return {
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Patrick', speciality: 'Java', show: false},
        ],
        title: 'Vue Ninjas'
      };
    },
    methods: {
      updateTitle(payload) {
        this.title = payload;
      }
    }
  };
</script>

<style scoped>
</style>

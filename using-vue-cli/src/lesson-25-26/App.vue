<template>
  <div>
    <header-component v-bind:title="title"/>
    <!-- SENDING ninjas array[] to Ninjas.vue -->
    <!-- we use "v-bind" to make it dynamic -->
    <ninjas-component v-bind:ninjas="ninjas"/>
    <button @click="deleteNinja">Delete Ninja</button>
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
      deleteNinja() {
        this.ninjas.pop();
      }
    },

    // LIFECYCLE HOOKS
    beforeCreate() {
      alert('beforeCreate');
    },

    // good point to fetch here data from the server
    created() {
      alert('created');
    },

    beforeMount() {
      alert('beforeMount');
    },

    mounted() {
      alert('mounted');
    },

    beforeUpdate() {
      alert('beforeUpdate');
    },

    updated() {
      alert('updated');
    }
  };
</script>

<style scoped>
</style>

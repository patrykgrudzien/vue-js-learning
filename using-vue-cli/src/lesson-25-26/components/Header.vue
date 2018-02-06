<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
  import { bus } from '../main';

  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {};
    },
    methods: {
      changeTitle() {
        // $emit(EVENT_NAME, payload)
        let newTitle = 'Vue Wizards';

        this.title = newTitle;
        bus.$emit('change-title-using-bus', newTitle);
      }
    }
  }
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }

  h1 {
    color: #222;
    text-align: center;
  }
</style>

<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
        this.$emit('change-title-event', 'Vue Wizards');
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

<template>
  <div>
    <iframe :src="src"></iframe>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name: "HelloWorld",

  data: () => ({
  }),
  computed: mapState(['src'])
};
</script>

<style scoped>
  iframe {
    width: 900px;
    height: 100vh;
  }
</style>
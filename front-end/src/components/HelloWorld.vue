<template>
  <div>
    <iframe :src="src"></iframe>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  props: {
    src: String
  }
};
</script>

<style scoped>
  iframe {
    width: 900px;
    height: 100vh;
  }
</style>
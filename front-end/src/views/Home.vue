<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vT_x9WS6keS0sGmYxp3sY6WrfUmeAzz0jfE-_3hlZlvtMEmBrxxF7fyHwnWppcfOULT4_0szq8DDKCt/pub?embedded=true"></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
  iframe {
    width: 900px;
    height: 100vh;
  }
</style>
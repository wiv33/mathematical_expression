<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({

  }),
    props: {
      msg: String
    }
};
</script>

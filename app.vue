<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";

  export default {
    components: {
      Header,
    },
  };
</script>

<style>
  body {
    margin: 0;
    /* You can keep the black background-color or change it as needed */
    background-color: black;
  }
</style>

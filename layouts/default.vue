<template>
  <div>
    hallo
    <Header />
    <slot />
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
  /* Your styles for the layout */
</style>

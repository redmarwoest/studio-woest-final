<template>
  <div class="overlay">
    <div class="overlay__content">
      <h1>
        We craft
        <span class="bold"> digital experiences</span> that convert.
      </h1>
      <div class="overlay__actions">
        <button>
          convert yours <span class="bold">here</span> <span class="dot"></span>
        </button>
      </div>
    </div>
    <Canvas />
  </div>
</template>

<script setup lang="ts">
  import Canvas from "../components/three/Canvas.vue";
</script>

<style lang="scss" scoped>
  .overlay {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      position: absolute;
      width: 520px;
      text-align: center;
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #ddff51;
    padding: 12px;

    &:hover {
      background-color: #292929;
    }
  }
</style>

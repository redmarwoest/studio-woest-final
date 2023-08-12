<template>
  <canvas id="canvas" ref="canvas"></canvas>
  <div></div>
</template>

<script setup lang="ts">
  import WebGL from "@/class/three/WebGL";

  const canvas: { value: any | null } = ref(null);
  console.log(canvas);
  onMounted(() => {
    WebGL.setup(canvas.value);
  });
</script>

<style scoped>
  canvas {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }
</style>

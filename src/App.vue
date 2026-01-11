<script setup lang="ts">
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

a,
a * {
  text-decoration: none;
}
</style>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  margin: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #110418;
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>

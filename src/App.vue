<script setup lang="ts"></script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style lang="scss">
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

<style scoped lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  margin: none;
  padding: $standard-spacing;
  display: flex;
  flex-direction: column;
  background-color: $background-color;
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>

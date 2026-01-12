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
  background-color: $background-color;
}

a,
a * {
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

a {
  color: $link-color !important;
  text-decoration: none;
}
</style>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  width: 100vw;
  margin: none;
  padding: $standard-spacing;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    lighten($background-color, 5%),
    darken($background-color, 5%)
  );
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>

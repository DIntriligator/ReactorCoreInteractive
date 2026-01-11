<template>
  <div class="home">
    <Logo />

    <p class="description">Just a solo developer making cool games!</p>

    <GameListing />
  </div>
</template>

<script setup>
import GameListing from "../GameListing/GameListing.vue";
import Logo from "../Logo/Logo.vue";
</script>

<style scoped lang="scss">
.home {
  margin-top: $standard-spacing;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: $standard-spacing;
}

.description {
  font-family: "Courier New", Courier, monospace;
  color: $highlight-color;
  text-align: center;
  font-size: 1.2em;
}
</style>

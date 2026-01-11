<template>
  <div class="home">
    <Logo />

    <p class="description">Just a solo developer making cool games!</p>

    <hr class="separator" />

    <GameListing />
  </div>
</template>

<script setup>
import GameListing from '../GameListing/GameListing.vue';
import Logo from '../Logo/Logo.vue';

</script>

<style scoped lang="scss">
.home {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 20px;
}

.separator {
  width: 60%;
  border: 1px solid $highlight-color;
  margin: 0 auto;
  box-shadow: 0 0 10px $highlight-color;
}

.description {
  font-family: 'Courier New', Courier, monospace;
  color: $highlight-color;
  text-align: center;
  font-size: 1.2em;
}
</style>

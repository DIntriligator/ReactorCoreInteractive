<template>
  <div class="GameListing">
    <GameCard v-for="game in games" :key="game.id" :id="game.id" :image="game.image" :title="game.title"
      :type="game.type" />
  </div>
</template>

<script setup>
import GameCard from './GameCard/GameCard.vue';
import { games } from '../../GameData';
</script>

<style scoped lang="scss">
.GameListing {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #ffffff;
}
</style>

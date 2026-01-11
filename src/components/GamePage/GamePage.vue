<template>
  <div v-if="game" class="GamePage">
    <div class="header">
      <RouterLink to="/" class="button">&#8592; Back to Home</RouterLink>
    </div>

    <Card>
      <img class="image" :src="game?.banner" :alt="game?.title" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import { games, type Game } from '@/GameData';
import { computed } from 'vue';
import Card from '../Card/Card.vue';

const props = defineProps<{
  id: string
}>();

const game = computed((): Game | undefined => games.find(game => game.id === Number(props.id)));
</script>

<style scoped>
.GamePage {
  color: #ffffff;
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.button {
  font-family: 'Courier New', Courier, monospace;
  color: #b998ce;
  padding: 5px 10px;
  border: 1px solid #b998ce;
  border-radius: 5px;
}

.button:hover {
  color: #cbabdf;
  border-color: #cbabdf;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>

<template>
  <RouterLink :to="`/game/${id}`">
    <Card class="GameCard" interactive>
      <img :src="image" :alt="title" class="game-image" />

      <span v-if="type" class="info">

        <p class="game-device">{{ type }}</p>
      </span>
    </Card>
  </RouterLink>
</template>

<script setup lang="ts">
import Card from "../../Card/Card.vue";


const props = defineProps<{
  id: number,
  image: string,
  title: string,
  type: string,
  links?: string[]
}>();
</script>

<style scoped>
.GameCard {
  width: 200px;
  font-family: 'Courier New', Courier, monospace;
}


.game-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #b998ce;
}

.info {
  padding: 5px 20px;
  text-align: center;

}
</style>

<template>
  <div
    v-if="game"
    class="GamePage"
  >
    <div class="header">
      <RouterLink
        to="/"
        class="button"
        >&#8592; Back to Home</RouterLink
      >
    </div>

    <Card>
      <div class="flex-container">
        <img
          class="image"
          :src="game?.banner"
          :alt="game?.title"
        />

        <div class="content">
          <Trailer />
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { games, type Game } from "@/GameData";
import { computed } from "vue";
import Card from "../Card/Card.vue";
import Trailer from "./Trailer/Trailer.vue";

const props = defineProps<{
  id: string;
}>();

const game = computed((): Game | undefined =>
  games.find((game) => game.id === props.id),
);
</script>

<style scoped lang="scss">
.GamePage {
  color: #ffffff;
  max-width: 800px;
  width: 100%;
  margin: $standard-spacing auto;
  display: flex;
  flex-direction: column;
  gap: $standard-spacing;
  align-items: flex-start;
}

.button {
  font-family: "Courier New", Courier, monospace;
  color: $highlight-color;
  padding: 5px 10px;
  border: 1px solid $highlight-color;
  border-radius: 5px;
}

.button:hover {
  color: lighten($highlight-color, 20%);
  border-color: lighten($highlight-color, 20%);
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid $highlight-color;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: $standard-spacing;
}

.content {
  display: flex;
  flex-direction: column;
  gap: $standard-spacing;
  padding: $standard-spacing;
}
</style>

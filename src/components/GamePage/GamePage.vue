<template>
  <div
    v-if="game"
    class="GamePage"
  >
    <div class="header">
      <RouterLink
        to="/"
        class="button"
      >
        <RcButton icon="fa-arrow-left"> Back to Home </RcButton>
      </RouterLink>
    </div>

    <FadeInStagger>
      <Card>
        <FadeInStagger class="flex-container">
          <img
            class="image"
            :src="game?.banner"
            :alt="game?.title"
          />

          <div
            v-if="game?.description"
            class="content"
          >
            <p>
              {{ game?.description }}
            </p>

            <span class="centered">
              <a
                :href="game?.soundtrack"
                target="_blank"
              >
                <RcButton icon="fa-music"> Soundtrack </RcButton>
              </a>
            </span>

            <Trailer />
          </div>
        </FadeInStagger>
      </Card>
    </FadeInStagger>
  </div>
</template>

<script setup lang="ts">
import { games, type Game } from "@/GameData";
import { computed } from "vue";
import Card from "../Card/Card.vue";
import Trailer from "./Trailer/Trailer.vue";
import FadeInStagger from "../FadeInStagger/FadeInStagger.vue";
import RcButton from "../RcButton/RcButton.vue";

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

  p {
    line-height: 1.6;
  }
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
  align-items: center;
  gap: $standard-spacing;
}

.content {
  display: flex;
  flex-direction: column;
  gap: calc(#{$standard-spacing} * 2);
  padding: $standard-spacing;
}

.centered {
  display: inline-flex;
  justify-content: center;
}
</style>

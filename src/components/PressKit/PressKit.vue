<template>
  <FadeInStagger class="PressKit">
    <Card v-if="game">
      <img
        class="image"
        :src="game?.banner"
        :alt="game?.title"
      />

      <h1 class="title">{{ game?.title }} Press Kit</h1>

      <div class="content">
        <div class="sidebar">
          <h2>Factsheet</h2>

          <div class="keyvalue">
            <h3>Developer</h3>
            <p>Reactor Core Interactive</p>
          </div>

          <div class="keyvalue">
            <h3>Genre</h3>
            <p>{{ game?.genre }}</p>
          </div>

          <div class="keyvalue">
            <h3>Platform</h3>
            <p>{{ game?.platforms }}</p>
          </div>

          <div class="keyvalue">
            <h3>Website</h3>

            <a href="https://dintriligator.github.io/ReactorCoreInteractive/">
              Reactor Core Interactive
            </a>
          </div>

          <div class="keyvalue">
            <h3>Email</h3>

            <a
              href="mailto:"
              target="_blank"
            >
              Coming Soon
            </a>
          </div>

          <div class="keyvalue">
            <h3>Social Media</h3>

            <a
              href="#"
              target="_blank"
            >
              <i class="fa-brands fa-twitter"></i> @ReactorCoreInt
            </a>

            <a
              href="#"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i> @ReactorCoreInteractive
            </a>

            <a
              href="#"
              target="_blank"
            >
              <i class="fa-brands fa-tiktok"></i> @ReactorCoreInteractive
            </a>
          </div>
        </div>

        <div class="main-content">
          <div class="keyvalue">
            <h2>Pitch</h2>

            <p>{{ game?.pitch }}</p>
          </div>

          <div class="keyvalue">
            <h2>Description</h2>

            <p v-html="game?.longDescription"></p>
          </div>

          <div class="keyvalue">
            <h2>History</h2>

            <p v-html="game?.history"></p>
          </div>

          <div class="keyvalue">
            <h2>Key Features</h2>

            <ul>
              <li
                v-for="feature in game?.keyFeatures"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="keyvalue">
            <h2>Trailer</h2>

            <a
              v-if="game?.trailerFile"
              :href="game?.trailerFile"
              download
            >
              <RcButton icon="fa-download"> Download Trailer </RcButton>
            </a>

            <Trailer
              class="trailer"
              :url="game?.trailer"
            />
          </div>

          <Screenshots :id="game?.id" />
        </div>
      </div>
    </Card>
  </FadeInStagger>
</template>

<script setup lang="ts">
import { games } from "@/GameData";
import Card from "../Card/Card.vue";
import { computed } from "vue";
import FadeInStagger from "../FadeInStagger/FadeInStagger.vue";
import Trailer from "../GamePage/Trailer/Trailer.vue";
import RcButton from "../RcButton/RcButton.vue";
import Screenshots from "../Screenshots/Screenshots.vue";

const props = defineProps<{
  id: string;
}>();

const game = computed(() => {
  return games.find((g) => g.id === props.id);
});
</script>

<style scoped lang="scss">
.PressKit {
  max-width: 100%;
  width: 1100px;
  margin: 0 auto;
}

.title {
  padding: 10px $standard-spacing;
  border: 1px solid $highlight-color;
  border-right: none;
  border-left: none;
  font-size: 32px;
}

.content {
  display: flex;
  flex-direction: column-reverse;
  gap: $standard-spacing;
  padding: $standard-spacing;

  @media (min-width: 900px) {
    flex-direction: row;
  }
}

.main-content {
  display: inline-flex;
  flex-basis: 67%;
  flex-direction: column;
  gap: $standard-spacing;
}

.sidebar {
  display: inline-flex;
  flex-direction: column;
  gap: $standard-spacing;
  flex-basis: 33%;
  padding-right: $standard-spacing;

  @media (min-width: 900px) {
    border-right: 1px solid $highlight-color;
  }
}

.keyvalue {
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  a {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    font-size: 16px;

    li {
      margin-bottom: 5px;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "courier prime", monospace;
}

.trailer {
  justify-content: flex-start;
}
</style>

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

          <div class="keyvalue">
            <h2>Screenshots & Media Assets</h2>
            <a
              v-if="gameScreenshotsZip"
              class="download-all"
              :href="gameScreenshotsZip"
              download
            >
              <RcButton icon="fa-download"> Download Full Screenshot Set </RcButton>
            </a>
            <div
              v-if="gameScreenshots.length"
              class="screenshot-grid"
            >
              <a
                v-for="(screenshot, index) in gameScreenshots"
                :key="screenshot"
                class="screenshot-link"
                :href="screenshot"
                target="_blank"
                rel="noopener"
                download
              >
                <img
                  class="screenshot"
                  :src="screenshot"
                  :alt="`${game?.title} screenshot ${index + 1}`"
                  loading="lazy"
                />
              </a>
            </div>
            <p v-else>No screenshots available.</p>
          </div>
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

const screenshotModules = import.meta.glob("@/assets/**/screenshots/**", {
  eager: true,
  as: "url",
}) as Record<string, string>;
const screenshotZipModules = import.meta.glob("@/assets/**/zip/*.zip", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const props = defineProps<{
  id: string;
}>();

const game = computed(() => {
  return games.find((g) => g.id === props.id);
});

const gameScreenshots = computed(() => {
  return Object.entries(screenshotModules)
    .filter(([path]) => path.includes(`/${props.id}/screenshots/`))
    .map(([, url]) => url)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
});

const gameScreenshotsZip = computed(() => {
  return (
    Object.entries(screenshotZipModules)
      .filter(([path]) => path.includes(`/${props.id}/zip/`))
      .map(([, url]) => url)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0] ?? ""
  );
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

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: $standard-spacing;
  margin-top: 10px;
}

.download-all {
  align-self: flex-start;
}

.screenshot-link {
  display: block;
  border: 1px solid $highlight-color;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.screenshot {
  display: block;
  width: 100%;
  height: auto;
}
</style>

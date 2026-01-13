<template>
  <div class="Screenshots">
    <h2>Screenshots</h2>

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
</template>

<script setup lang="ts">
import RcButton from "@/components/RcButton/RcButton.vue";
import { games } from "@/GameData";
import { computed } from "vue";

const props = defineProps<{
  id: string;
}>();

const game = computed(() => {
  return games.find((g) => g.id === props.id);
});

const screenshotModules = import.meta.glob("@/assets/**/screenshots/**", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const screenshotZipModules = import.meta.glob(
  "@/assets/**/screenshots-archive/*.zip",
  {
    eager: true,
    as: "url",
  },
) as Record<string, string>;

const gameScreenshots = computed(() => {
  return Object.entries(screenshotModules)
    .filter(([path]) => path.includes(`/${props.id}/screenshots/`))
    .map(([, url]) => url)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
});

const gameScreenshotsZip = computed(() => {
  return (
    Object.entries(screenshotZipModules)
      .filter(([path]) => path.includes(`/${props.id}/screenshots-archive/`))
      .map(([, url]) => url)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0] ?? ""
  );
});
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 10px;
}

.Screenshots {
  display: flex;
  flex-direction: column;
  gap: 5px;
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

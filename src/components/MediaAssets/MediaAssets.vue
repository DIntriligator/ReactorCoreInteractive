<template>
  <div class="MediaAssets">
    <h2>Media Assets</h2>

    <a
      v-if="gameMediaZip"
      class="download-all"
      :href="gameMediaZip"
      download
    >
      <RcButton icon="fa-download"> Download Media Asset Pack </RcButton>
    </a>
    <div
      v-if="gameMediaAssets.length"
      class="media-grid"
    >
      <a
        v-for="(asset, index) in gameMediaAssets"
        :key="asset"
        class="media-link"
        :href="asset"
        target="_blank"
        rel="noopener"
        download
      >
        <img
          class="media-image"
          :src="asset"
          :alt="`${game?.title} media asset ${index + 1}`"
          loading="lazy"
        />
      </a>
    </div>
    <p v-else>No media assets available.</p>
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

const mediaModules = import.meta.glob("@/assets/**/media/**", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const mediaZipModules = import.meta.glob("@/assets/**/media-archive/*.zip", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const gameMediaAssets = computed(() => {
  return Object.entries(mediaModules)
    .filter(([path]) => path.includes(`/${props.id}/media/`))
    .map(([, url]) => url)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
});

const gameMediaZip = computed(() => {
  return (
    Object.entries(mediaZipModules)
      .filter(([path]) => path.includes(`/${props.id}/media-archive/`))
      .map(([, url]) => url)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0] ?? ""
  );
});
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 10px;
}

.MediaAssets {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.download-all {
  align-self: flex-start;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 1);
  gap: $standard-spacing;
  margin-top: 10px;
}

.media-link {
  display: block;
  border: 1px solid $highlight-color;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.media-image {
  display: block;
  width: 100%;
  height: auto;
}
</style>

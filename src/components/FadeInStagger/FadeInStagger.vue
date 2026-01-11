<template>
  <div ref="container" class="FadeInStagger" :style="styleVars">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, ref } from "vue";

const props = withDefaults(
  defineProps<{
    delay?: number;
    interval?: number;
    duration?: number;
    offsetY?: number;
  }>(),
  {
    delay: 0,
    interval: 120,
    duration: 500,
    offsetY: 12,
  },
);

const container = ref<HTMLElement | null>(null);

const styleVars = computed(() => ({
  "--stagger-delay": `${props.delay}ms`,
  "--stagger-interval": `${props.interval}ms`,
  "--stagger-duration": `${props.duration}ms`,
  "--stagger-offset": `${props.offsetY}px`,
}));

const applyIndices = () => {
  if (!container.value) return;
  Array.from(container.value.children).forEach((child, index) => {
    (child as HTMLElement).style.setProperty("--stagger-index", `${index}`);
  });
};

onMounted(async () => {
  await nextTick();
  applyIndices();
});

onUpdated(async () => {
  await nextTick();
  applyIndices();
});
</script>

<style scoped lang="scss">
.FadeInStagger > * {
  opacity: 0;
  transform: translateY(var(--stagger-offset, 12px));
  animation: fade-in var(--stagger-duration, 500ms) ease forwards;
  animation-delay: calc(
    var(--stagger-delay, 0ms) + var(--stagger-interval, 120ms) *
      var(--stagger-index, 0)
  );
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(var(--stagger-offset, 12px));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

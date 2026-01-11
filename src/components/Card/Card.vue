<template>
  <span class="Card" :class="{
    interactive
  }">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  interactive?: boolean
}>();
</script>

<style scoped lang="scss">
.Card {
  display: flex;
  flex-direction: column;
  background-color: lighten($background-color, 5%);
  border-radius: 10px;
  transition: transform 0.2s;
  border: 1px solid $highlight-color;
  box-shadow: 0 0 10px $highlight-color;
  overflow: hidden;
  color: $highlight-color;
  width: 100%;
}

.interactive:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 0 20px $highlight-color
}
</style>

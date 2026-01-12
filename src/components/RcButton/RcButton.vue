<template>
  <span class="button">
    <i
      v-if="icon"
      :class="['fa', icon]"
    ></i>
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
}>();
</script>

<style scoped lang="scss">
a .button,
.button {
  font-family: "Courier New", Courier, monospace;
  color: $highlight-color;
  padding: 5px 10px;
  border: 1px solid $highlight-color;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

a .button:hover,
.button:hover {
  color: lighten($highlight-color, 20%);
  border-color: lighten($highlight-color, 20%);
}
</style>

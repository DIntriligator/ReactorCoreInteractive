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

<style scoped>
.Card {
  display: flex;
  flex-direction: column;
  background-color: #2c0d3e;
  border-radius: 10px;
  transition: transform 0.2s;
  border: 1px solid #b998ce;
  box-shadow: 0 0 10px #b998ce;
  overflow: hidden;
  color: #b998ce;
  width: 100%;
}

.interactive:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 0 20px #b998ce
}
</style>

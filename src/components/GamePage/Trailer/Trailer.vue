<template>
  <div class="Trailer">
    <div class="inner">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_5oSez6Cnbo?si=nLRrprv7odscOMLd"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.Trailer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.inner {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid $highlight-color;
}
</style>

<template>
  <div class="logo">
    <img src="/ReactorCoreIcon.png" alt="Reactor Core Interactive" class="icon" />

    <h1>
      Reactor Core
    </h1>

    <h2>
      Interactive
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo h1, .logo h2 {
  font-family: 'Teko', sans-serif;
  color: #ffffff;
  margin: 0;
  padding: 0;
  line-height: 60%;
  font-weight: 350;
  letter-spacing:2px;
}

.logo h1 {
  font-weight: 400;
  font-size: 75px;
}

.logo h2 {
  font-weight: 400;
  font-size: 50px;
}

.icon {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
</style>

<script setup>
import config from '@/config';
</script>

<template>
  <div class="jumbotron p-5 bg-primary text-white">
    <h1>{{ config.title }}</h1>
    <p>{{ config.subtitle }}</p>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('@/assets/images/background3.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  padding: 2rem;
  min-height: 250px; /* ✅ 세로 길이 확장 */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
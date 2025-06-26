<template>
  <div class="travel-list">
    <h1>여행지 목록</h1>
    <ul>
      <li v-for="place in places" :key="place.id">
        {{ place.name }} - {{ place.location }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const places = ref([
  { id: 1, name: '부산 해운대', location: '부산' },
  { id: 2, name: '경주 불국사', location: '경주' },
  { id: 3, name: '제주 성산일출봉', location: '제주' }
])
</script>

<style scoped>
.travel-list {
  max-width: 600px;
  margin: 100px auto;
}
.travel-list li {
  margin-bottom: 8px;
}
</style>

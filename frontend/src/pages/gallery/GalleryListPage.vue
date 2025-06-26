<template>
  <div class="gallery">
    <h1>갤러리</h1>
    <div class="gallery-grid">
      <img v-for="img in images" :key="img.id" :src="img.url" :alt="img.alt" />
    </div>
  </div>
</template>

<script setup>
const images = [
  { id: 1, url: 'https://via.placeholder.com/150', alt: '샘플 이미지 1' },
  { id: 2, url: 'https://via.placeholder.com/150', alt: '샘플 이미지 2' },
  { id: 3, url: 'https://via.placeholder.com/150', alt: '샘플 이미지 3' }
]
</script>

<style scoped>
.gallery-grid {
  display: flex;
  gap: 10px;
}
.gallery-grid img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>

<template>
  <div class="board-list">
    <h1>게시판 목록</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: '첫 번째 게시글' },
  { id: 2, title: '두 번째 게시글' },
  { id: 3, title: '세 번째 게시글' }
])
</script>

<style scoped>
.board-list {
  max-width: 600px;
  margin: 100px auto;
}
.board-list ul {
  padding: 0;
  list-style: none;
}
.board-list li {
  margin-bottom: 10px;
  padding: 10px;
  background: #f5f5f5;
}
</style>

<template>
  <div class="profile-page">
    <h1>내 프로필</h1>
    <p><strong>아이디:</strong> {{ username }}</p>
    <p><strong>이메일:</strong> {{ email }}</p>
  </div>
</template>

<script setup>
const username = 'scoula_user'
const email = 'user@example.com'
</script>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: 100px auto;
  font-size: 1.1em;
}
</style>

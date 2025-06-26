<template>
  <div class="login-page">
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="아이디" />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function login() {
  console.log('로그인 시도:', username.value, password.value)
  // 실제 로그인 로직은 여기서 API 호출 등을 넣으면 됩니다.
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.login-page input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
.login-page button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>

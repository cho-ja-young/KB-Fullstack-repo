<template>
  <div class="join-page">
    <h1>회원가입</h1>
    <input v-model="username" placeholder="아이디" />
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <button @click="join">가입하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')

function join() {
  console.log('회원가입 정보:', username.value, email.value, password.value)
}
</script>

<style scoped>
.join-page {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
}
.join-page input, .join-page button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
</style>

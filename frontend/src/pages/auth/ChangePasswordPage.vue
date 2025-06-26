<template>
  <div class="change-password">
    <h1>비밀번호 변경</h1>
    <input v-model="currentPassword" type="password" placeholder="현재 비밀번호" />
    <input v-model="newPassword" type="password" placeholder="새 비밀번호" />
    <input v-model="confirmPassword" type="password" placeholder="새 비밀번호 확인" />
    <button @click="changePassword">변경하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

function changePassword() {
  if (newPassword.value !== confirmPassword.value) {
    alert('새 비밀번호가 일치하지 않습니다.')
    return
  }
  console.log('비밀번호 변경 요청:', currentPassword.value, newPassword.value)
}
</script>

<style scoped>
.change-password {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
}
.change-password input, .change-password button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
</style>

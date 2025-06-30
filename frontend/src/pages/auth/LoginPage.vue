<template>
  <div class="login-page">
    <div v-if="!isLoggedIn">
      <h1>로그인</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="loginForm.username" type="text" placeholder="아이디" />
        <input v-model="loginForm.password" type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </div>
    <!-- 로그인 되었을 때 화면 -->
    <div v-else>
      <h1>환영합니다!!</h1>
      <p>
        <strong>사용자명: {{ userInfo.username }}</strong>
      </p>
      <p>
        <strong>이메일: {{ userInfo.email }}</strong>
      </p>
      <p>
        <strong>권한: {{ userInfo.roles }}</strong>
      </p>
      <button @click="handleLogout">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import axios from 'axios';

// 로그인 상태 반응형 데이터
const isLoggedIn = ref(false);

// 로그인 입력 상태 반응형 데이터(객체)
const loginForm = ref({
  username: '',
  password: '',
});

const userInfo = ref({});

// 로그인 처리 함수
const handleLogin = async () => {
  try {
    console.log('📤 로그인 요청 시작', loginForm.value);
    // 실제 요청 주소 : http://localhost:8080/api/auth/login
    // loginForm.value -> {username: '', password: '',}
    // -> axios가 자동으로 JSON으로 변환!
    const response = await axios.post('/api/auth/login', loginForm.value);

    console.log('✅ 로그인 성공 응답', response.data);
    console.log('response.data :', response.data); // 서버 응답 데이터

    if (response.status === 200) {
      // 구조 분해 할당
      const { token, user } = response.data;

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('authToken', token);

      // 로컬 스토리지에 사용자 정보(JSON) 저장
      localStorage.setItem('userInfo', JSON.stringify(user));

      // 로그인 상태 업데이트
      isLoggedIn.value = true;

      // 로그인 폼에 입력된 값 초기화(v-model)
      loginForm.value = {
        username: '',
        password: '',
      };
    }
  } catch (e) {
    console.error(e);
  }
};

// 로그아웃 처리 함수
const handleLogout = () => {
  // 로컬 스토리지 저장된 내용 비우기
  //   localStorage.clear();

  localStorage.removeItem('authToken');
  localStorage.removeItem('userInfo');

  isLoggedIn.value = false;
};

// // 로그인 상태 확인 함수
const checkLoginStatus = () => {
  const token = localStorage.getItem('authToken');
  const savedUserInfo = localStorage.getItem('userInfo');

  if (token && savedUserInfo) {
    isLoggedIn.value = true;
    userInfo.value = JSON.parse(savedUserInfo);
  } else {
    isLoggedIn.value = false;
    userInfo.value = {};
  }
};

// // 컴포넌트 마운트 시 로그인 상태 확인
onMounted(() => {
  checkLoginStatus();
});
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

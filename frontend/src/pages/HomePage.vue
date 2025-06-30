<script setup>
import { ref, onMounted } from 'vue';

// 시계
const currentTime = ref(new Date().toLocaleTimeString());

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>

<template>
  <div class="home-body">
    <!-- 메인 콘텐츠 영역 -->
    <section class="main-section">
      <h2>🌤️ 오늘도 좋은 하루!</h2>

      <div class="time-weather">
        <div class="time-box">
          <h3>🕒 현재 시간</h3>
          <p>{{ currentTime }}</p>
        </div>
        <div class="weather-box">
          <h3>🌦️ 날씨</h3>
          <p>서울: 맑음, 26°C</p>
        </div>
      </div>

      <div class="calendar-box">
        <h3>📅 오늘의 날짜</h3>
        <p>{{ new Date().toLocaleDateString('ko-KR') }}</p>
      </div>
    </section>

    <!-- 사이드바 -->
    <aside class="sidebar">
      <div class="quote-box">
        <h3>📌 오늘의 명언</h3>
        <blockquote>“성공은 준비와 기회의 만남이다.” - 세네카</blockquote>
      </div>

      <div class="link-box">
        <h3>🔗 추천 링크</h3>
        <ul>
          <li><a href="https://velog.io" target="_blank">Velog</a></li>
          <li><a href="https://github.com" target="_blank">GitHub</a></li>
          <li><a href="https://weather.naver.com/" target="_blank">네이버 날씨</a></li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.home-body {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.main-section {
  flex: 2;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.time-weather {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.time-box,
.weather-box {
  flex: 1;
  background-color: #f0fdf4;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.calendar-box {
  margin-top: 2rem;
  background-color: #fff8e1;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.sidebar {
  flex: 1;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.quote-box blockquote {
  font-style: italic;
  color: #666;
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  margin: 1rem 0;
}

.link-box ul {
  list-style: none;
  padding: 0;
}

.link-box li {
  margin-bottom: 0.5rem;
}

.link-box a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}
</style>

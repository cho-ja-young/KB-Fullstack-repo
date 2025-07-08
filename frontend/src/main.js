import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';  // Bootstrap CSS 추가
import 'vue-awesome-paginate/dist/style.css'; // 페이지네이션 스타일

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAwesomePaginate from 'vue-awesome-paginate'; // 페이지네이션 컴포넌트
// import 'vue-awesome-paginate/dist/style.css';

import App from './App.vue';
import router from './router';

// ✅ 전역 컴포넌트 등록 (use 아님!!)
// import { Paginate } from 'vue-awesome-paginate';

const app = createApp(App);

// app.component('vue-awesome-paginate', Paginate); // ✅ 이거 중요
app.use(VueAwesomePaginate); // 전역 컴포넌트 등록
app.use(createPinia());  // 상태 관리
app.use(router);         // 라우팅

app.mount('#app');
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS 추가
import 'vue-awesome-paginate/dist/style.css'; // 페이지네이션 스타일

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAwesomePaginate from 'vue-awesome-paginate'; // 페이지네이션 컴포넌트
import { useKakao } from "vue3-kakao-maps/@utils";

import App from './App.vue';
import router from './router';

// ✅ 환경 변수에서 Kakao JS 키 불러오기
const rest_api_key = import.meta.env.VITE_KAKAO_JS_KEY;
useKakao(rest_api_key, ["services"]);

const app = createApp(App);
app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);
app.mount("#app");
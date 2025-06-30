<template>
  <nav class="navbar navbar-expand-sm custom-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-house"></i>
        Scoula
      </router-link>

      <!-- 모바일 토글 버튼 -->
      <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavShow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 네비게이션 메뉴 -->
      <div :class="navClass" id="collapsibleNavbar">
        <MenuGroup :menus="config.menus" />
        <AccountMenuGroup />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { reactive, computed } from 'vue';
import config from '@/config';
import MenuGroup from './menu/MenuGroup.vue';
import AccountMenuGroup from './menu/AccountMenuGroup.vue';

let state = reactive({ isNavShow: false });

let navClass = computed(() =>
    state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
);

const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>

<style scoped>
.custom-navbar {
  background-color: #f0fdf4; /* 연한 민트 */
  border-bottom: 1px solid #d1e7dd;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.25rem;
  color: #2e7d32 !important; /* 진한 초록 */
}

.navbar-brand i {
  margin-right: 0.5rem;
  color: #2de792;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%232e7d32' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(46,125,50, 0.7)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-nav .nav-link {
  color: #2e7d32 !important;
  font-weight: 500;
}

.navbar-nav .nav-link:hover {
  color: #1b5e20 !important;
}
</style>

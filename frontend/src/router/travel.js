export default [
    {
        path: '/travel/list',
        name: 'travel/list',
        component: () => import('../pages/travel/TravelListPage.vue'),
    },

    // 상세 조회
    {
        path: '/travel/detail/:no',
        name: 'travel/detail',
        component: () => import('../pages/travel/TravelDetailPage.vue'),
    },
];
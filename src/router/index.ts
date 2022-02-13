import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'FrameBody',
    component: () => import('@/pages/frame-body/index.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
        meta: {
          title: 'page Login'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

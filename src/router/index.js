import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      // Profile
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/components/main-views/Profile.vue'),
      },
      // Skiils
      {
        path: '/skills',
        name: 'Skills',
        component: () => import('@/components/main-views/Skills.vue'),
      },
      // Experience
      {
        path: '/experience',
        name: 'Experience',
        component: () => import('@/components/main-views/Experience.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

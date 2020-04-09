import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Test' },
    { path: '/home', component: '@/pages/Home' },
  ],
});

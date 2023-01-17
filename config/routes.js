export default [
  {
    path: '/',
    // component: '@/layouts',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        component: './Home',
      },
    ],
  }
]
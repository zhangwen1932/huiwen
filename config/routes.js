export default [
  {
    path: '/',
    // component: '@/layouts',
    routes: [
      {
        path: '/',
        redirect: '/about',
      },
      {
        name: '关于我们',
        path: '/about',
        component: '@/pages/About',
      },
      {
        name: '联系我们',
        path: '/contact',
        component: '@/pages/Contact',
      },
      {
        name: '主营业务',
        path: '/main',
        component: '@/pages/Main',
      },
      {
        name: '团队介绍',
        path: '/team',
        component: '@/pages/Team',
      },
    ],
  }
]
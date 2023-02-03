import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  base: '/hw/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  locale: {
    default: 'zh-CN',
    baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
    antd: true, // 是否启用antd的<LocaleProvider />
    baseSeparator: '-',
    useLocalStorage: true,
  },
  routes,
  npmClient: 'yarn',
  title: '汇文',
  hash: true,
  favicons: ['./favicon.ico'],
});

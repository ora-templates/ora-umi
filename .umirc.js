
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {},
      library: 'react',
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading',
      },
      // title: 'ora-umi',
      dll: false,
      pwa: false,
      // hd: true,
      fastClick: true,
      headScripts: [],
      metas: [
        { charset: 'utf-8' },
      ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // History model
  history: 'hash',
  publicPath: './',
  cssPublicPath: './',
  runtimePublicPath: true,
  targets: {
    ie: 9,
  },
  // global
  context: {
    title: 'Ora Umi'
  },
  exportStatic: true,
  // webpack
  theme: './src/theme/index.js',
  routes: [
    {
      path: '/login', 
      component: './login', 
    },
    { 
      path: '/', 
      component: '../layouts', 
      routes: [
        { path: './', component: './index' },
        { path: './help', component: './help' },
      ], 
    },
  ],
  chainWebpack: function (config, { webpack }) { 
    // webpack config
  },
}

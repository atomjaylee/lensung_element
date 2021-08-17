import config from './package.json';

export default {
  title: '邻商商品',
  mode: 'site',

  resolve: {
    includes: ['docs', 'packages'],
  },

  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/atomjaylee/lensung_element' },
    {
      title: `更新日志(v${config.version})`,
      path: 'https://github.com/atomjaylee/lensung_element/releases',
    },
    { title: 'UI样式', path: 'https://scene.zeplin.io/project/60caa81ec5f968bcc4b5aa07' },
  ],

  base: '/lensung_element/',
  publicPath: '/lensung_element/',
};

// const bgmConfig = require('../configJson/bgm.json')

module.exports = {
  base: "/blog/",
  dest: "",
  title: "arisemarcher--我的博客",
  description: "for better learn",
  theme: 'reco',
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['meta', {
      name: 'description',
      content: 'arisemarcher个人主页，前端，Gulp'
    }],
    ['meta', {
      name: 'keywords',
      content: '个人主页，博客，arisemarcher'
    }]
  ],
  themeConfig: {
    type: 'blog',
    author: 'arisemarcher',
    authorAvatar: '/avatar.png',
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 博客配置
    nav: [{
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
    ],
    blogConfig: {
      category: {
        location: 3,
        text: "分类"
      },
      tag: {
        location: 4,
        text: "标签"
      },
    },
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          bottom: "0px",
          right: "0px",
          opacity: "1",
          zIndex: 99999
        }
      }
    ],
    '@vuepress-reco/extract-code',
    '@vuepress/plugin-register-components',
    'go-top',
    'cursor-effects',
    [
      'ribbon',
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
    [
      'meting',
      {
        meting: {
          auto: 'https://music.163.com/#/playlist?id=7530805504'
        }, // 不配置该项的话不会出现全局播放器
        aplayer: {
          autoplay: true,
          lrcType: 3,
        },
        defaultCover: 'https://nyakku.moe/avatar.jpg',
      },
    ],
  ]
}
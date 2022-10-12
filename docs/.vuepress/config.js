const myConfig = require('./public/json/myConfig.json')

module.exports = {
  base: "/blog/",
  dest: "",
  title: "🐂",
  // description: "世事如落花 心境自空明",
  description: "世事如落花 心境自空明",
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
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 2,
    displayAllHeaders: true,
    activeHeaderLinks: true, // 默认值：true
    sidebar: myConfig,
    lastUpdated: true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        // theme: ["miku"],
        theme: 	['haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        modelStyle: {
          position: "fixed",
          bottom: "0px",
          right: "66px",
          opacity: "1",
          zIndex: 99999
        }
      }
    ],
    '@vuepress-reco/extract-code',
    '@vuepress/plugin-register-components',
    'cursor-effects', // 点击炫酷样式
    'vuepress-plugin-code-copy',
    // [
    //   'ribbon',
    //   {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1, // z-index property of the background, default: -1
    //   },
    // ],
    [
      'dynamic-title',
      {
        showIcon: '/blog/favicon.ico',
        showText: '🦉',
        hideIcon: '/blog/failure.ico',
        hideText: '🐝',
        recoverTime: 0,
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
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    ["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }     
    }]
  ]
}
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = pathName => path.join(__dirname, pathName)
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: '/',
  dest: 'dist',
  title: "Wycer's blog",
  description: '花开花落，再灿烂的星光也会消失。',
  markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  head: [
    ['link', {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3F51B5'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/icons/192.png'
    }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/192.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#3F51B5'
    }]
  ],
  serviceWorker: true,
  theme: '',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Wycer's blog",
      description: '花开花落，再灿烂的星光也会消失。'
    }
  },
  configureWebpack: (config, isServer) => {
    const myConfig = {
      resolve: {
        alias: {
          '@pub': resolve('./public')
        }
      },
      module: {
        rules: [{
          test: /vuetify.+\.js$/,
          loader: resolve('./ignoreStylus'),
        }]
      }
    }
    if (isServer) {
      myConfig.externals = nodeExternals({
        whitelist: [/vuetify/, /fortawesome/, /prismjs/]
      })
    }
    return myConfig
  },
  themeConfig: {
    lang: 'zh-CN',
    postDir: '/posts',
    essayDir: '/articles',
    subTitle: 'QwQ',
    author: 'Wycer',
    email: 'wycers@gmail.com',
    since: 2018,
    avatar: '/avatar.jpg',
    github: 'Wycers',
    avatarLink: '/',
    comment: {
      clientID: '9177e010a77733962ec3',
      clientSecret: '927d778b40b56948aa055b2f7ab7cb24c40e1168',
      repo: 'Wycers.github.io',
      owner: 'Wycers',
      admin: ['Wycers'],
      distractionFreeMode: false
    },
    menus: [
      // icons by https://fontawesome.com/icons
      {
        text: '主页',
        icon: 'fa fa-home',
        url: '/'
      },
      {
        text: '随笔',
        icon: 'fa fa-edit',
        url: '/essay'
      },
      {
        text: '标签',
        icon: 'fa fa-tag',
        url: '/tags'
      },
      {
        text: 'Github',
        icon: 'fab fa-github',
        url: '/github',
        // external: true
      },
      {
        text: '关于',
        icon: 'fa fa-user-secret',
        url: '/about'
      }
    ],
    socials: ['QQ'],
    colors: {
      // generate by https://vuetifyjs.com/zh-Hans/theme-generator
      primary: '#3F51B5',
      secondary: '#6d6d6d',
      accent: '#E91E63',
      error: '#f44336',
      warning: '#FFC107',
      info: '#00B8D4',
      success: '#4caf50'
    },
    format: {
      date: 'YYYY年MM月DD日',
      dateTime: 'YYYY年MM月DD日 HH:mm:ss'
    },
    pagination: {
      path: '/page/:pageNum',
      pageSize: 5
    },
    tags: {
      path: '/tags/:tagName'
    },
    categories: {
      path: '/categories/:category'
    }
  }
}

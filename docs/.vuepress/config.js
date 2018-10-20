module.exports = {

    title: 'Wycer\'s Blog',
    description: '记录奇怪的日常',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    host: '0.0.0.0',
    port: 8081,
    themeConfig: {
        // 博客背景图片
        background: `/background/path`,
        // github card
        github: 'Wycers',
        // 博客的 logo
        logo: '/logo/path',
        // 定制文章标题颜色
        accentColor: '#ac3e40',
        // 每页显示的文章数量
        per_page: 5,
        // 和 vuepress 默认主题一样, 定制导航栏上的链接
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'GITHUB', link: 'https://github.com/bloss' },
            { text: '关于我', link: '/about/' }, 
        ]
    }
}

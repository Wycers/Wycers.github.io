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
        //gitc 仓库地址
        repo: 'Wycers/Wycers.github.io',
        //导航栏
        nav: [
            { text: 'Home', link: '/' }
        ],

        //搜索
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated', // string | boolean
    }
}

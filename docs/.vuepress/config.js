module.exports = {

    title: '记录集',
    description: '记录生活，记录成长',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }]
    ],
    host: '0.0.0.0',
    //mac下port未生效
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

const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    title: "那一刻的技术博客",
    description: "刘某人技术博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'author', content: '那一刻' }],
        ['link', { name: 'keywords', content: '刘某人技术博客' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('LLLL')
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/nyk.jpg',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '基础篇',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'html', link: '/html/' },
                    { text: 'css', link: '/about' },
                    { text: 'js', link: '/about' },
                    { text: 'ajax', link: '/about' },
                    { text: 'vue', link: '/about' },
                ]
            },
            { text: '实战篇', link: '' },
            { text: '踩过的坑', link: '' },
            { text: '大牛总结面试题', link: 'https://blog.poetries.top/FE-Interview-Questions/docs/base.html#' },
            { text: '留言板', link: '' },
            { text: '关于我', link: '' },
            { text: 'github', link: 'https://github.com/LiuMinGit/blog' },
        ],
        // navbar: false,
        sidebar: [
            {
                title: 'html',   // 必要的
                path: '/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/html/html语义化',
                  '/html/html元信息',
                  '/html/html5新特性',
                ]
              },
        ]
    }
}
const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    base: "/docs/",
    title: "那一刻技术博客",
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
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        // navbar: false,
        sidebar: {
            "/javascript/": [
                'j-aaa',
                'j-bbb',
                'j-ccc',
            ],
            "/css/": [
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
            "/": []
        }
    }
}
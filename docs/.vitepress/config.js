export default {
    title: '前端小册',
    description: '前端.',
    appearance: true,
    themeConfig: {
        sidebar: {
            '/': [
                {
                    text: '写在前面',
                    items: [
                        {text: '前言', link: '/'},
                        {text: '更新说明', link: '/changelog.md'},
                    ]
                },
                {
                    text: '前端工程化入门教程',
                    items: [
                        {text: '了解前端工程化', link: '/vue/了解前端工程化.md'},
                        {text: '学会使用包管理工具', link: '/vue/学会使用包管理工具.md'},
                        {text: '脚手架与工具链', link: '/vue/脚手架与工具链.md'},
                        {text: '论一个组件的自我修养', link: '/vue/组件的自我修养.md'},
                        {text: '组件之间的通信', link: '/vue/组件间的通信.md'},
                        {text: '全局状态的管理', link: '/vue/全局状态的管理.md'},
                        {text: '聊聊代码规范', link: '/vue/学会使用包管理工具.md'},
                        {text: '高效开发', link: '/vue/高效开发.md'},
                    ]
                },
                {
                    text: '搞不懂的 JS',
                    items: [
                        {text: '快速上手 TypeScript', link: '/js/typeScript.md'},
                        {text: '实用代码技巧', link: '/js/实用代码技巧.md'},
                        {text: '数组', link: '/js/数组.md'},
                        {text: '字符串', link: '/js/字符串.md'},
                        {text: '深入理解函数', link: '/js/深入理解函数.md'},
                    ]
                },
                {
                    text: 'CSS 的一些奇技淫巧',
                    items: [
                        {text: '选择器', link: '/css/选择器.md'},
                        {text: '格式化基础', link: '/css/格式化基础.md'},
                        {text: '布局', link: '/css/布局.md'},
                        {text: '一些小技巧总结', link: '/css/一些小技巧总结.md'},
                        {text: '高效开发', link: '/css/高效开发.md'},
                    ]
                }
            ],
        },
        editLink: {
            pattern: 'https://github.com/ikangjia/front-end-booklet/edit/main/docs/:path',
            text: '在 GitHub 上编辑本章内容'
        },
        docFooter: {
            prev: '上一章',
            next: '下一章'
        },
        outline: [2, 5],
        outlineTitle: '目录'
    },
    markdown: {
        // theme: 'material-palenight',
        lineNumbers: false
    }
}

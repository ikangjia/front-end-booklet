const sidebarObj = {
    '/front-end/': [
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
            ]
        },
        {
            text: '搞不懂的 JS',
            items: [
                {text: '快速上手 TypeScript', link: '/js/typescript.md'},
                {text: '实用代码技巧', link: '/js/实用代码技巧.md'},
                {text: '数组', link: '/js/数组.md'},
                {text: '字符串', link: '/js/字符串.md'},
                {text: '深入理解函数', link: '/js/深入理解函数.md'},
            ]
        },
        {
            text: 'CSS 的一些奇技淫巧',
            collapsible: true,
            items: [
                {text: '选择器', link: '/css/选择器.md'},
                {text: '格式化基础', link: '/css/格式化基础.md'},
                {text: '布局', link: '/css/布局.md'},
                {text: '一些小技巧总结', link: '/css/一些小技巧总结.md'},
                {text: '高效开发', link: '/css/高效开发.md'},
            ]
        }
    ],
    '/back-end/': [
        {
            text: '实用代码技巧',
            items: [
                {text: 'Java 新特性', link: '/vue/了解前端工程化.md'},
                {text: 'Lambda 表达式与流库', link: '/vue/了解前端工程化.md'},
            ]
        },
        {
            text: '框架类库',
            collapsible: true,
            items: [
                {text: 'Spring 的十三种常见扩展', link: '#'},
                // {text: '探究任务调度', link: '/css/选择器.md'},
            ]
        }
    ],
    '/dev-ops/': [
        {
            text: '开发环境与部署',
            items: [
                {text: '得会用 Docker 吧', link: '/vue/了解前端工程化.md'},
                // {text: '得懂一点 Nginx 吧', link: '/vue/了解前端工程化.md'},
                // {text: '得会用 Git 吧', link: '/vue/了解前端工程化.md'},
                {text: 'Linux 或多或少', link: '/vue/了解前端工程化.md'},
            ]
        },
        {
            text: '数据库',
            items: [
                {text: 'MySQL 不会不行啊', link: '/vue/了解前端工程化.md'},
                // {text: 'Redis 不会也不行啊', link: '/vue/了解前端工程化.md'},
                // {text: 'MongoDB 是我自愿学的', link: '/vue/了解前端工程化.md'},
            ]
        },
    ],
    '/guide/': [
        {
            text: '写在前面',
            items: [
                {text: '前言', link: '/guide/'},
                {text: '更新说明', link: '/guide/changelog.md'},
                {text: 'VitePress', link: '/guide/vitepress.md'},
            ]
        },
    ],
}
export default sidebarObj

const sidebar = [
    {
        text: '🌱 写在前面',
        items: [
            {text: '前言', link: '/'},
            {text: '更新说明', link: '/changelog.md'},
        ]
    },
    {
        text: '🌽 前端工程化入门教程',
        items: [
            {text: '重新认识前端', link: '/vue/重新认识前端.md'},
            {text: '了解前端工程化', link: '/vue/了解前端工程化.md'},
            {text: '脚手架与工具链', link: '/vue/脚手架与工具链.md'},
            {text: '单组件的自我修养', link: '/vue/单组件的自我修养.md'},
            {text: '组件之间的通信', link: '/vue/组件间的通信.md'},
            {text: '全局状态管理', link: '/vue/全局状态的管理.md'},
        ]
    },
    {
        text: '🔥 搞不懂的 JS',
        items: [
            {text: '快速上手 TypeScript', link: '/js/typescript.md'},
            {text: '实用代码技巧', link: '/js/实用代码技巧.md'},
            {text: '数组', link: '/js/数组.md'},
            {text: '数组1', link: '/js/array/'},
            {text: '字符串', link: '/js/字符串.md'},
            {text: '深入理解函数', link: '/js/深入理解函数.md'},
        ]
    },
    {
        text: '🌈 CSS 的一些奇技淫巧',
        collapsible: true,
        items: [
            {text: '选择器', link: '/css/选择器.md'},
            {text: '格式化基础', link: '/css/格式化基础.md'},
            {text: '布局', link: '/css/布局.md'},
            {text: '一些小技巧总结', link: '/css/一些小技巧总结.md'},
            {text: '高效开发', link: '/css/高效开发.md'},
        ]
    }
]
export default sidebar

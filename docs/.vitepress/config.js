import sidebar from "./sidebar";

export default {
    title: '🐭 老康的技术小册',
    description: '前端.',
    appearance: true,
    themeConfig: {
        nav: [
            { text: '🌈 前端', link: '/front-end/' },
            { text: '🔥 后端', link: '/back-end/' },
            { text: '🌽 DevOps', link: '/dev-ops/' },
            { text: '🌱 关于', link: '/guide/' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ikangjia' },
        ],
        sidebar,
        editLink: {
            pattern: 'https://github.com/ikangjia/front-end-booklet/edit/main/docs/:path',
            text: '在 GitHub 上编辑本章内容'
        },
        docFooter: {
            prev: '上一章',
            next: '下一章'
        },
        outline: 'deep',
        outlineTitle: '目录',
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-PRESENT 林深时觉寒",
        },
        algolia: {
            appId: 'U2DFM2E8HG',
            apiKey: '9c4b9c69e85b85c6bb6da9bccd382452',
            indexName: 'ikangjia-booklet',
            placeholder: '请输入关键词',
            buttonText: '搜索',
        }
    },
    markdown: {
        // theme: 'material-palenight',
        lineNumbers: false
    }
}

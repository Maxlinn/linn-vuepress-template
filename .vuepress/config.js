// https://vuepress.vuejs.org/zh/config/
// https://www.vuepress.cn/zh/theme/default-theme-config.html

const getConfig = require("vuepress-bar")
const { _, sidebar } = getConfig(".vuepress/..")

module.exports = {
    // if you want to deploy to 'http://xxx/ instead of 'http://xxx/yy', remove next line
    base: "/linn-vuepress-template/",
    title: "This is site title",
    description: "This is invisible HTML description",
    plugins: [
        // LaTeX support
        ['@maginapp/vuepress-plugin-katex', { delimiters: 'dollars' }],
        // mermaid.js support
        ['vuepress-plugin-mermaidjs', {}]
    ],

    themeConfig: {
        nav: [
            {
                text: 'CC-BY-SA 4.0',
                link: 'https://creativecommons.org/licenses/by-sa/4.0'
            }
        ],
        // sidebar: 'auto', // 
        // root level documents must be added manually
        sidebar: [
            {
                title: "Home",
                children: ["README.md"]
            },
            ...sidebar.filter(i => i.title !== "Node Modules")
        ],
        smoothScroll: true,

        /// if you are using github... 
        lastUpdated: 'Last Updated', // Last updated prefix in the bottom of page
        repo: 'Maxlinn/linn-vuepress-template',
        repoLabel: 'Github',
        docsBranch: 'main', // Default branch of github has become main
        editLinks: true,
        editLinkText: 'Suggest This Page'
    }
}
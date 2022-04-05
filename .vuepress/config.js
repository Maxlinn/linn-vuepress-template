// https://vuepress.vuejs.org/zh/config/
// https://www.vuepress.cn/zh/theme/default-theme-config.html

module.exports = {
    // if you want to deploy to 'http://xxx/ instead of 'http://xxx/yy', remove next line
    base: "/linn-vuepress-template/",
    title: "This is site title",
    description: "This is invisible HTML description",

    // add math support
    plugins: {
        '@maginapp/vuepress-plugin-katex': {
            delimiters: 'dollars'
        }
    },
    themeConfig: {
        nav: [
            {
                text: 'CC-BY-SA 4.0',
                link: 'https://creativecommons.org/licenses/by-sa/4.0'
            }
        ],
        sidebar: 'auto',
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
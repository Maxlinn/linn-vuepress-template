// https://vuepress.vuejs.org/zh/config/
// https://www.vuepress.cn/zh/theme/default-theme-config.html

module.exports = {
    // if you want to deploy to 'http://xxx/ instead of 'http://xxx/yy', remove next line
    base: "/linn-vuepress-template/",
    title: "This is site title",
    description: "This is invisible HTML description",

    themeConfig: {
        nav: [
            {
                text: 'CC-BY-SA 4.0',
                link: 'https://creativecommons.org/licenses/by-sa/4.0'
            }
        ],
        sidebar: 'auto',
        smoothScroll: true,
        footer: 'this is footer',

        /// if you are using github... 
        // Last updated prefix in the bottom of page
        lastUpdated: 'Last Updated',
        repo: 'Maxlinn/linn-vuepress-template',
        repoLabel: 'Github',

        // Default branch of github has become main
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Suggest This Page'
    }
}
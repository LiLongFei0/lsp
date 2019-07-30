
const glob = require('glob');//安装golb包

function getEntry(globPath) {
    let pages = {};
    glob.sync(globPath).forEach(filepath => {
        let fileList = filepath.split('/');
        let fileName = fileList[fileList.length - 2];
        pages[fileName] = {
            entry: `src/pages/${fileName}/app.js`,
            // 模板来源
            template: `src/pages/${fileName}/index.html`,
            // 在 dist/index.html 的输出
            // filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}/index.html`,
            filename: `${fileName}.html`,
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', fileName]
        }
    })
    return pages
}

let pages = getEntry('./src/pages/*/*.js');

module.exports = {
    pages,
    css: {//引入全局css
        modules: false,
        sourceMap: false,
        loaderOptions: {
            // sass: {
            //     data: `@import "@/assets/css/_variables.scss";
            // //         @import "@/assets/css/menu.scss";
            // //         @import "@/assets/css/icon.scss";
            // //         @import "@/assets/css/mixin.scss";`
            // }
        }
    },
    chainWebpack: config => {
        let arr = ["home", "index", "login"];
        arr.forEach((v) => {
            config.plugins.delete(`prefetch-${v}`)
            config.plugins.delete(`preload-${v}`)
        })
    },
    lintOnSave: false,
    productionSourceMap: false,
}
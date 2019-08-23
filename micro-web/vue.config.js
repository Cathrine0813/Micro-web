
module.exports = {
    // 构建一个多页应用
    /**
     * 不是每个应用都需要是一个单页应用。
     * Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。
     * 构建好的应用将会在不同的入口之间高效共享通用的 chunk 以获得最佳的加载性能。
     */
    pages: {

        /**
         * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
         * 其值应该是一个对象，对象的 key 是入口的名字，value 是：一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
         * 或一个指定其 entry 的字符串。
         */
        index: {
            entry: 'src/index/main.js',// page 的入口
            template: 'public/index.html',// 模板来源
            filename: 'index.html',// 在 dist/index.html 的输出
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js'
    }




    // --------------------------------------------------------------------------简单配置-configureWebpack
    // /**
    //  * 例如你应该修改 vue.config.js 中的 outputDir 选项而不是修改 output.path；
    //  * 你应该修改 vue.config.js 中的 publicPath 选项而不是修改 output.publicPath。
    //  */ 
    // configureWebpack: {
    //     plugins: [
    //         new MyAwesomeWebpackPlugin()
    //     ]
    // }

    // /**
    //  * 基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
    //  * 该方法的第一个参数会收到已经解析好的配置。
    //  * 在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    //  */
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置...
    //     } else {
    //         // 为开发环境修改配置...
    //     }
    // }

    // --------------------------------------------------------------------------高级配置-链式操作chainWebpack
    // chainWebpack: config => {
    //     // ------------------1、修改 Loader 选项
    //     config.module
    //         .rule('vue')
    //         .use('vue-loader')
    //         .loader('vue-loader')
    //         .tap(options => {
    //             // 修改它的选项...
    //             return options
    //         })
    //     // ------------------2、添加一个新的 Loader
    //     config.module
    //         .rule('graphql')
    //         .test(/\.graphql$/)
    //         .use('graphql-tag/loader')
    //         .loader('graphql-tag/loader')
    //         .end()
        
    //     const svgRule = config.module.rule('svg')

    //     // ------------------3、替换一个规则里的 Loader
    //     // 清除已有的所有 loader。
    //     // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    //     svgRule.uses.clear()
    //     // 添加要替换的 loader
    //     svgRule
    //         .use('vue-svg-loader')
    //         .loader('vue-svg-loader')
            
    //     // ------------------4、修改插件选项
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             return [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
    //         })
        

    //     /**
    //      * 比方说你想要将 index.html 默认的路径从 /Users/username/proj/public/index.html 改为 /Users/username/proj/app/templates/index.html。
    //      * 通过参考 html-webpack-plugin 你能看到一个可以传入的选项列表。
    //      * 我们可以在下列配置中传入一个新的模板路径来改变它
    //      */
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             args[0].template = '/Users/username/proj/app/templates/index.html'
    //             return args
    //         })
    // }
}
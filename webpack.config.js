// webpack 基于node环境开发, 所有符合nodejs语法点的都可以在webpack中使用
const path = require('path')
// 使用html-webpack-plugin 插件, 在使用webpack打包时, 会将对应的html文件托管到内存中, 并自动将打包后的js文件引入HTML文件中
const htmlWebpackPlugin = require('html-webpack-plugin')
//引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 导出对象, webpack会根据导出的配置对象, 对指定文件进行打包操作
module.exports = {
    //  指定入口文件
    entry: path.join(__dirname, './src/main.js'),
    // 指定生成文件位置
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //配置需要打包文件的模板
            filename: 'index.html' //打包生成文件名
        }),
        new VueLoaderPlugin()
    ],
    // 配置loader加载器
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配需要加载器处理的文件后缀名
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|webp|gif)$/,
                use: 'url-loader?limit=234&name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
    // resolve: {
    //     alias: {
    //         "vue$": "vue/dist/vue.js"
    //     }
    // }

}

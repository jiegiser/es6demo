// const webpack= require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    optimization: {
        minimize: false
      },
    // mode: 'production',
    // optimization: {
    //     minimizer: [
    //       // we specify a custom UglifyJsPlugin here to get source maps in production
    //       new UglifyJsPlugin({
    //         cache: true,
    //         parallel: true,
    //         uglifyOptions: {
    //           compress: false,
    //           ecma: 6,
    //           mangle: true
    //         },
    //         sourceMap: true
    //       })
    //     ]
    //   },np webpack ./app.js  ./dist/sbundle.js --modedevelopment
    devtool: 'source-map',//追踪报错信息
    entry: './app.js',//项目的入口文件
    output: { //编译好的文件路径
        filename: './dist/bundle.js',
    },//webpack是通过模块加载了，下面是定义模块的加载方式
    module: {
        rules: [{
            test: /\.js$/,//那种类型的文件，以js结尾的正则表达式
            use: [
                {
                    loader: 'babel-loader',
                    options: { presets: ['es2015']},//使用es2015
                },
            ],
        }],
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         sourceMap: true,
    //     }),//压缩js的插件
    // ],
};
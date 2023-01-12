/*
 * Author: 吴楚标
 * Date: 2021-07-17 17:38:30
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-17 20:34:28
 * Description:
 */
const path = require('path');
module.exports = {
  // 模式：开发模式
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 打包到什么文件
  output: {
    filename: 'bundle.js',
  },
  // 配置 webpack-dev-server
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, 'html'),
    // 不压缩
    compress: false,
    // 端口号
    port: 8080,
    // 虚拟打包的路径， bundle.js 文件没有真正生成
    publicPath: '/xuni/'
  },
};

// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080,
    proxyTable: {
      '/api': {
        // 开发服务器
        // target: '',
        // 测试服务器
        target: 'http://192.168.20.135:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    entries: 'src/js/*.js'
  }
}

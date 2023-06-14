const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/burdah-fe/',
  pwa: {
    name: "Kitab Burdah",
    short_name: "Kitab Burdah",
    display: "standalone",
    themeColor: '#FCFCFC',
    msTileColor: '#FCFCFC',
    appleMobileWebAppStatusBarStyle: 'default',
    description: "Kitab Qasidah Burdah dan Yasin Fadhilah"
  }
})


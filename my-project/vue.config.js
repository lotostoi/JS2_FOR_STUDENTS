module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/style.scss";`,
      },
    },
  },
  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/test/': {
            target: 'http://localhost:3555',
            secure: false,
            changeOrigin: true,
          },
        },
      },
    }
  },
}

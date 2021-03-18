  
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
            '/api/': {
              target: 'http://localhost:3000',
              secure: false,
              changeOrigin: true,
            },
          },
        },
      }
    },
  }
const { defineConfig } = require('@vue/cli-service')
const pageName = 'energoterapya_programma'

const outputDir = pageName
const publicPath = process.env.NODE_ENV === 'production'
  ? `/${pageName}`
  : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath,
  outputDir
})
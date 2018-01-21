// const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: pkg.name,
    description: pkg.description,
    // template: path.join(__dirname, 'index.ejs'),
    inject: false
  },
  port: 4000,
  vendor: false,
  presets: [
    require('poi-preset-bundle-report')()
  ],
  env: {
    AOBA_VERSION: pkg.version
  }
}

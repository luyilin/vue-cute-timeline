module.exports = {
  plugin: [require('rollup-plugin-vue')(
    {css: true}
  )],
  format: [
    "cjs",
    "umd"
  ]
}

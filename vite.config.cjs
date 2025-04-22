const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')

module.exports = defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: '/portfolio-personale/',
}))

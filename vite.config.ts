import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/** @ts-ignore */
import autoEslint from 'vite-plugin-eslint'
import autoImportComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  envDir: './env',
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '#': resolve(process.cwd(), 'src/types')
    }
  },
  plugins: [
    vue(),
    autoEslint({
      cache: true,
      // fix 配置是否进行格式化
      fix: false,
      eslintPath: 'eslint',
      lintOnStart: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.vue'],
      emitWarning: true,
      emitError: true,
      failOnError: true
    }),
    autoImportComponents({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    port: 9074
  }
})

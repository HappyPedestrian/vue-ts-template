// postcss 插件
import autoPrefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import { loadEnv } from 'vite'

// const autoPrefixer = require('autoprefixer')
// const pxtorem = require('postcss-pxtorem')
// const vite = require('vite')

export default ({ env }) => {
  const envObj = loadEnv(env, './env')
  return {
    plugins: [
      autoPrefixer(),
      pxtorem({
        rootValue: Number(envObj.VITE_PXTOREM_ROOTVALUE) || 16, // 根元素字体大小
        unitPrecision: 5,
        propList: ['*'],
        replace: true,
        mediaQuery: true,
        minPixelValue: 1
      })
    ]
  }
}

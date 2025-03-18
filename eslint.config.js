import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettierRecommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      // ts 文件检查规则
      // 允许 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许非空断言
      '@typescript-eslint/no-non-null-assertion': 'off',
      // 允许使用 ts 注释
      '@typescript-eslint/ban-ts-comment': 'off',

      // vue 检查规则
      'vue/multi-word-component-names': 'off'
    }
  }
]

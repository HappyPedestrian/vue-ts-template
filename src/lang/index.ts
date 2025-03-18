import type { App } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zh-CN'

export type MessageSchema = typeof en

export enum LANGUAGE_OPTIONS {
  EN = 'en',
  ZH_CN = 'zhCN'
}

const messages = {
  en: {
    ...en
  },
  zhCN: {
    ...zhCN
  }
}

// 加上类型校验，防止中英文翻译字段不一致导致出错
const i18n = createI18n<[MessageSchema], LANGUAGE_OPTIONS.EN | LANGUAGE_OPTIONS.ZH_CN>({
  legacy: false,
  globalInjection: false,
  messages: messages,
  locale: getLanguage()
})

export function setupI18n(app: App) {
  app.use(i18n)
}

/**
 * 翻译函数
 * hook 函数, 只能在 setup 里使用
 */
export function useTranslate() {
  const { t } = useI18n<{ message: MessageSchema }>({
    useScope: 'global'
  })

  return {
    translate: t
  }
}

/**
 * 翻译函数
 * 可在组件外使用进行翻译
 */
export const translate = i18n.global.t

export function getLanguage() {
  const languageOption = [LANGUAGE_OPTIONS.EN, LANGUAGE_OPTIONS.ZH_CN]

  const systemLanguage = navigator.language.replace('-', '')

  for (const language of languageOption) {
    if (systemLanguage.includes(language)) {
      return language
    }
  }

  return LANGUAGE_OPTIONS.EN
}

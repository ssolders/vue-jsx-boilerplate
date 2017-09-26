import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { fetchUrlParamValueByKey } from '~/utils/helpers'

// Languages
import en from './langs/en'
import sv from './langs/sv'


Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: fetchUrlParamValueByKey('lang'),
  fallbackLocale: 'en', //used if the supplied lang is not defined in "messages" below or if the lang-param is missing entierly
  messages: {
    en,
    sv
  }
})

export default i18n

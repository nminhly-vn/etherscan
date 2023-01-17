/**
 * @format
 */

import 'react-native-reanimated'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import I18n from 'i18n-js'

const initLanguage = () => {
  I18n.defaultLocale = 'en'
  I18n.fallbacks = true
  I18n.translations = {
    en: require('./src/assets/lang/en.json')
  }
}

AppRegistry.registerComponent(appName, () => {
  initLanguage()
  return App
})

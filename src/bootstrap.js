import 'babel-polyfill'
import Vue from 'vue'
import VueI18nManager from 'vue-i18n-manager'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueConfigManager from 'vue-config-manager'
import store from './app/store'
import routes from './app/routes'
import App from './app'

/**
 * Application configuration
 * @type {Object}
 */
Vue.use(VueConfigManager, {
  defaults: {
    debug: true,
    api: {
      base: 'http://localhost/api'
    }
  }
})

/**
 * Initialize vue-resource plugin to manage application routing
 */
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * Sync store and router
 */
sync(store, router)

/**
 * Internationalization and localization
 */
const context = require.context('./asset/lang', true, /\.json$/)
let translations = {}

context.keys().forEach(language => {
  const name = language.split('.')[1].replace('/', '')

  translations = {
    ...translations,
    [name]: context(language)
  }
})

Vue.use(VueI18nManager, {
  store,
  router,
  config: {
    persistent: false,
    translations
  }
})

/**
 * Start the i18n manager
 */
Vue.initI18nManager()

/**
 * Creates and mounts the app
 */
const app = new App({ store, router })
app.$mount('#app')
